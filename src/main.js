import "whatwg-fetch";

// ── Constants ────────────────────────────────────────────
// Standard fetch() options — these are passed to new Request().
// Everything else is a plugin-specific option and gets stripped before Request.
const STANDARD_FETCH_KEYS = [
  "method",
  "headers",
  "body",
  "mode",
  "credentials",
  "cache",
  "redirect",
  "referrer",
  "integrity",
  "keepalive",
  "signal",
  "window", // (deprecated but still in spec)
];

// Plugin-specific keys (merged into fetchOption but NOT passed to Request)
const PLUGIN_KEYS = ["timeout", "fetchStart", "fetchSuccess", "fetchError"];

// ── Error ────────────────────────────────────────────────
class FetchPluginError extends Error {
  constructor(message, { url, status, fetchOption } = {}) {
    super(message);
    this.name = "FetchPluginError";
    this.url = url;
    this.status = status;
    this.fetchOption = fetchOption;
  }
}

// ── Global defaults ──────────────────────────────────────
let globalOption = {
  headers: new Headers({ "Content-Type": "application/json" }),
  mode: "same-origin",
  credentials: "include",
  cache: "reload",
  redirect: "follow",
  timeout: 30000,
  fetchStart(param) {
    return param;
  },
};

// ── Helpers ──────────────────────────────────────────────

function mergeHeaders(baseHeaders, override) {
  const merged = new Headers(baseHeaders);
  if (!override) return merged;

  if (override instanceof Headers) {
    for (const [k, v] of override.entries()) {
      merged.set(k, v);
    }
  } else if (typeof override === "object") {
    Object.entries(override).forEach(([k, v]) => merged.set(k, v));
  }
  return merged;
}

function pickStandardOptions(opts) {
  const result = {};
  for (const key of STANDARD_FETCH_KEYS) {
    if (key in opts) {
      result[key] = opts[key];
    }
  }
  return result;
}

let mergeOptions = (...args) => {
  let myOptions = Object.assign({}, ...args);
  let resultOptions = Object.assign({}, globalOption, myOptions);
  // Headers merge: global defaults + per-request overrides
  resultOptions.headers = mergeHeaders(
    globalOption.headers,
    myOptions.headers
  );
  return resultOptions;
};

let setOptions = (options) => {
  const merged = mergeOptions(options);
  globalOption = merged;
};

let parseJSON = (response) => {
  const maxErrorRes = 500;
  return response.text().then((text) => {
    try {
      return JSON.parse(text);
    } catch (err) {
      throw new FetchPluginError(
        `JSON Parse Error: ${err}, URL: ${response.url}, ${text.slice(0, maxErrorRes)}`,
        { url: response.url, fetchOption: response.fetchOption }
      );
    }
  });
};

let checkStatus = (response) => {
  if (
    (response.status >= 200 && response.status < 300) ||
    response.status === 304
  ) {
    return response;
  }
  throw new FetchPluginError(
    `HTTP Status Code: ${response.status}, URL: ${response.url}`,
    {
      url: response.url,
      status: response.status,
      fetchOption: response.fetchOption,
    }
  );
};

let setGetURL = (url, data = {}) => {
  if (
    Object.prototype.toString.call(data) !== "[object Object]" ||
    Object.keys(data).length === 0
  ) {
    return url;
  }

  const list = Object.keys(data).map(
    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
  );
  return url + (url.indexOf("?") === -1 ? "?" : "&") + list.join("&");
};

// ── Public methods ───────────────────────────────────────

let getJSON = (url, data = {}, option = {}) => {
  let fetchOption = mergeOptions({ method: "GET" }, option);
  let fetchURL = setGetURL(url, data);
  return _fetch(fetchURL, fetchOption)
    .then(parseJSON)
    .then(
      (data) => handleFetchPass(data, fetchOption),
      (err) => handleFetchError(err, fetchOption)
    );
};

let deleteJSON = (url, data = {}, option = {}) => {
  let fetchOption = mergeOptions({ method: "DELETE" }, option);
  let fetchURL = setGetURL(url, data);
  return _fetch(fetchURL, fetchOption)
    .then(parseJSON)
    .then(
      (data) => handleFetchPass(data, fetchOption),
      (err) => handleFetchError(err, fetchOption)
    );
};

let postJSON = (url, data = {}, option = {}) => {
  let fetchOption = mergeOptions(
    { method: "POST", body: JSON.stringify(data) },
    option
  );
  return _fetch(url, fetchOption)
    .then(parseJSON)
    .then(
      (data) => handleFetchPass(data, fetchOption),
      (err) => handleFetchError(err, fetchOption)
    );
};

let putJSON = (url, data = {}, option = {}) => {
  let fetchOption = mergeOptions(
    { method: "PUT", body: JSON.stringify(data) },
    option
  );
  return _fetch(url, fetchOption)
    .then(parseJSON)
    .then(
      (data) => handleFetchPass(data, fetchOption),
      (err) => handleFetchError(err, fetchOption)
    );
};

let handleFetchPass = (data, fetchOption) => {
  // Per-request hook checked first, then global
  if (fetchOption && typeof fetchOption.fetchSuccess === "function") {
    fetchOption.fetchSuccess(data);
  } else if (typeof globalOption.fetchSuccess === "function") {
    globalOption.fetchSuccess(data);
  }
  return data;
};

let handleFetchError = (error, fetchOption) => {
  fetchOption = fetchOption || error.fetchOption;
  if (fetchOption && typeof fetchOption.fetchError === "function") {
    fetchOption.fetchError(error);
  } else if (typeof globalOption.fetchError === "function") {
    globalOption.fetchError(error);
  }
  if (!(error instanceof Error)) {
    error = new FetchPluginError(String(error), { fetchOption });
  }
  throw error;
};

// ── JSONP ────────────────────────────────────────────────
let _jsonpSeq = 0;

let getJSONP = (url, data = {}, option = {}) => {
  // Use user-provided callback name, or auto-generate with monotonic counter
  const callbackValue =
    option.callbackName ||
    `jsonp_${Date.now()}_${_jsonpSeq++}`;

  data[option.callbackParam || "callback"] = callbackValue;
  const fetchURL = setGetURL(url, data);
  const head =
    document.head ||
    document.querySelector("head") ||
    document.documentElement;

  const timeout = option.timeout || globalOption.timeout || 30000;
  let timer = 0;
  const jsonpElement = document.createElement("script");

  const cleanup = () => {
    clearTimeout(timer);
    if (jsonpElement.parentNode) {
      head.removeChild(jsonpElement);
    }
    delete window[callbackValue];
  };

  jsonpElement.setAttribute("src", fetchURL);
  jsonpElement.setAttribute("charset", "utf-8");
  jsonpElement.setAttribute("defer", "");
  jsonpElement.setAttribute("async", "");
  head.insertBefore(jsonpElement, head.firstChild);

  return new Promise((resolve, reject) => {
    window[callbackValue] = (payload) => {
      cleanup();
      resolve(payload);
    };

    jsonpElement.onerror = () => {
      cleanup();
      reject(
        new FetchPluginError(`JSONP request failed: ${fetchURL}`, {
          url: fetchURL,
          fetchOption: option,
        })
      );
    };

    timer = setTimeout(() => {
      cleanup();
      reject(
        new FetchPluginError(`${fetchURL} timeout`, {
          url: fetchURL,
          fetchOption: option,
        })
      );
    }, timeout);
  });
};

// ── Core fetch ───────────────────────────────────────────
let _fetch = (url, fetchOption) => {
  return new Promise((resolve, reject) => {
    let timer = 0;
    const requestUrl = url;

    Promise.resolve(
      fetchOption.fetchStart({ url, fetchOption })
    ).then(
      (param) => {
        if (param === false) {
          reject(
            new FetchPluginError(`${requestUrl} cancel`, {
              url: requestUrl,
              fetchOption,
            })
          );
          return;
        }

        // Strip plugin-specific fields, keep only standard fetch options
        const standardOpts = pickStandardOptions(param.fetchOption);

        // AbortController for real request cancellation on timeout
        const controller = new AbortController();
        standardOpts.signal = controller.signal;

        timer = setTimeout(() => {
          controller.abort();
          reject(
            new FetchPluginError(`${param.url} timeout`, {
              url: param.url,
              fetchOption,
            })
          );
        }, param.fetchOption.timeout);

        const request = new Request(param.url, standardOpts);
        return fetch(request);
      },
      (error) => reject(error)
    ).then(
      (response) => {
        clearTimeout(timer);
        // Clone so user can re-read body in hooks (e.g., fetchSuccess)
        const cloned = response.clone();
        cloned.fetchOption = fetchOption;
        resolve(cloned);
      },
      (error) => {
        clearTimeout(timer);
        if (!(error instanceof FetchPluginError)) {
          error = new FetchPluginError(error.message || String(error), {
            url,
            fetchOption,
          });
        }
        error.url = error.url || url;
        error.fetchOption = error.fetchOption || fetchOption;
        reject(error);
      }
    );
  }).then(checkStatus);
};

export default {
  setOptions,
  getJSONP,
  getJSON,
  postJSON,
  putJSON,
  deleteJSON,
};

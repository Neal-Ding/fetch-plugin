import "whatwg-fetch";

let globalHeaders = {
  "Content-Type": "application/json",
};

let globalOption = {
  headers: new Headers(Object.entries(globalHeaders)),
  mode: "same-origin",
  credentials: "include",
  cache: "reload",
  redirect: "follow",
  timeout: 30000,
  fetchStart(param) {
    return param;
  },
};

let mergeOptions = (...args) => {
  let myOptions = Object.assign({}, ...args);
  let resultHeaders = Object.assign({}, globalHeaders, myOptions.headers);
  let resultOptions = null;

  resultOptions = Object.assign({}, globalOption, myOptions);
  resultOptions.headers = new Headers(Object.entries(resultHeaders));

  return {
    resultOptions,
    resultHeaders,
  };
};

let setOptions = (options) => {
  const merged = mergeOptions(options);
  globalOption = merged.resultOptions;
  globalHeaders = merged.resultHeaders;
};

let parseJSON = (response) => {
  const maxErrorRes = 500;

  return response.text().then((text) => {
    try {
      return JSON.parse(text);
    } catch (err) {
      throw new Error(
        `JSON Parse Error: ${err}, URL: ${response.url}, ${text.slice(0, maxErrorRes)}`
      );
    }
  });
};

let checkStatus = (response) => {
  if (
    (response.status >= 200 && response.status < 300) ||
    response.status == 304
  ) {
    return response;
  } else {
    throw new Error(
      `HTTP Status Code: ${response.status}, URL: ${response.url}`
    );
  }
};

let setGetURL = (url, data = {}) => {
  if (
    Object.prototype.toString.call(data) !== "[object Object]" ||
    Object.keys(data).length === 0
  ) {
    return url;
  }

  let list = [];
  for (let key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      list.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      );
    }
  }
  return url + (url.indexOf("?") === -1 ? "?" : "&") + list.join("&");
};

let getJSON = (url, data = {}, option = {}) => {
  let fetchOption = mergeOptions({ method: "GET" }, option).resultOptions;
  let fetchURL = setGetURL(url, data);

  return _fetch(fetchURL, fetchOption)
    .then(parseJSON)
    .then(handleFetchPass, handleFetchError);
};

let deleteJSON = (url, data = {}, option = {}) => {
  let fetchOption = mergeOptions({ method: "DELETE" }, option).resultOptions;
  let fetchURL = setGetURL(url, data);

  return _fetch(fetchURL, fetchOption)
    .then(parseJSON)
    .then(handleFetchPass, handleFetchError);
};

let postJSON = (url, data = {}, option = {}) => {
  let fetchOption = mergeOptions(
    { method: "POST", body: JSON.stringify(data) },
    option
  ).resultOptions;
  let fetchURL = url;

  return _fetch(fetchURL, fetchOption)
    .then(parseJSON)
    .then(handleFetchPass, handleFetchError);
};

let putJSON = (url, data = {}, option = {}) => {
  let fetchOption = mergeOptions(
    { method: "PUT", body: JSON.stringify(data) },
    option
  ).resultOptions;
  let fetchURL = url;

  return _fetch(fetchURL, fetchOption)
    .then(parseJSON)
    .then(handleFetchPass, handleFetchError);
};

let handleFetchPass = (data) => {
  typeof globalOption.fetchSuccess === "function" &&
    globalOption.fetchSuccess(data);

  return data;
};

let handleFetchError = (error) => {
  typeof globalOption.fetchError === "function" &&
    globalOption.fetchError(error);

  error = error instanceof Error ? error : new Error(error);
  throw error;
};

let getJSONP = (url, data = {}, option = {}) => {
  let callbackValue = "jsonp" + +new Date() + "_" + Math.random().toString(36).slice(2, 8);
  let jsonpElement = document.createElement("script");
  data[option.callbackName || "_callback"] = callbackValue;
  let fetchURL = setGetURL(url, data);
  let head =
    document.head ||
    document.querySelector("head") ||
    document.documentElement;

  let timeout = option.timeout || globalOption.timeout || 30000;
  let timer = 0;

  let cleanup = () => {
    clearTimeout(timer);
    if (jsonpElement.parentNode) {
      head.removeChild(jsonpElement);
    }
    delete window[callbackValue];
  };

  jsonpElement.setAttribute("src", fetchURL);
  jsonpElement.setAttribute("charset", "utf-8");
  jsonpElement.setAttribute("defer", true);
  jsonpElement.setAttribute("async", true);
  head.insertBefore(jsonpElement, head.firstChild);

  return new Promise((resolve, reject) => {
    window[callbackValue] = (payload) => {
      cleanup();
      resolve(payload);
    };

    jsonpElement.onerror = () => {
      cleanup();
      reject(new Error(`JSONP request failed: ${fetchURL}`));
    };

    timer = setTimeout(() => {
      cleanup();
      reject(new Error(`${fetchURL} timeout`));
    }, timeout);
  });
};

let _fetch = (url, fetchOption) => {
  return new Promise((resolve, reject) => {
    let timer = 0;
    let requestUrl = url;
    Promise.resolve(
      fetchOption.fetchStart({
        url,
        fetchOption,
      })
    ).then(
      (param) => {
        if (param === false) {
          let error = new Error(`${requestUrl} cancel`);
          error.fetchOption = fetchOption;
          reject(error);
          return;
        }

        // Strip non-standard fetchOption fields before passing to Request
        let {
          timeout,
          fetchStart,
          fetchSuccess,
          fetchError,
          ...standardFetchOption
        } = param.fetchOption;

        let myRequest = new Request(param.url, standardFetchOption);

        timer = setTimeout(() => {
          let error = new Error(`${param.url} timeout`);
          error.fetchOption = fetchOption;
          reject(error);
        }, timeout);

        return fetch(myRequest);
      },
      (error) => {
        reject(error);
      }
    ).then(
      (response) => {
        clearTimeout(timer);
        response.fetchOption = fetchOption;
        resolve(response);
      },
      (error) => {
        clearTimeout(timer);
        error.url = url;
        error.fetchOption = fetchOption;
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

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global._fetch = factory());
}(this, (function () { 'use strict';

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers$1(headers) {
    this.map = {};

    if (headers instanceof Headers$1) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers$1.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers$1.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers$1.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers$1.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers$1.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers$1.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers$1.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers$1.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers$1.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers$1.prototype[Symbol.iterator] = Headers$1.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request$1(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request$1) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers$1(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers$1(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request$1.prototype.clone = function() {
    return new Request$1(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers$1();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request$1.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers$1(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers$1(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  var DOMException = self.DOMException;
  try {
    new DOMException();
  } catch (err) {
    DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
  }

  function fetch$1(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request$1(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch$1.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch$1;
    self.Headers = Headers$1;
    self.Request = Request$1;
    self.Response = Response;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var jsx = function () {
    var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
    return function createRawReactElement(type, props, key, children) {
      var defaultProps = type && type.defaultProps;
      var childrenLength = arguments.length - 3;

      if (!props && childrenLength !== 0) {
        props = {};
      }

      if (props && defaultProps) {
        for (var propName in defaultProps) {
          if (props[propName] === void 0) {
            props[propName] = defaultProps[propName];
          }
        }
      } else if (!props) {
        props = defaultProps || {};
      }

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 3];
        }

        props.children = childArray;
      }

      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
      };
    };
  }();

  var asyncIterator = function (iterable) {
    if (typeof Symbol === "function") {
      if (Symbol.asyncIterator) {
        var method = iterable[Symbol.asyncIterator];
        if (method != null) return method.call(iterable);
      }

      if (Symbol.iterator) {
        return iterable[Symbol.iterator]();
      }
    }

    throw new TypeError("Object is not async iterable");
  };

  var asyncGenerator = function () {
    function AwaitValue(value) {
      this.value = value;
    }

    function AsyncGenerator(gen) {
      var front, back;

      function send(key, arg) {
        return new Promise(function (resolve, reject) {
          var request = {
            key: key,
            arg: arg,
            resolve: resolve,
            reject: reject,
            next: null
          };

          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        });
      }

      function resume(key, arg) {
        try {
          var result = gen[key](arg);
          var value = result.value;

          if (value instanceof AwaitValue) {
            Promise.resolve(value.value).then(function (arg) {
              resume("next", arg);
            }, function (arg) {
              resume("throw", arg);
            });
          } else {
            settle(result.done ? "return" : "normal", result.value);
          }
        } catch (err) {
          settle("throw", err);
        }
      }

      function settle(type, value) {
        switch (type) {
          case "return":
            front.resolve({
              value: value,
              done: true
            });
            break;

          case "throw":
            front.reject(value);
            break;

          default:
            front.resolve({
              value: value,
              done: false
            });
            break;
        }

        front = front.next;

        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }

      this._invoke = send;

      if (typeof gen.return !== "function") {
        this.return = undefined;
      }
    }

    if (typeof Symbol === "function" && Symbol.asyncIterator) {
      AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
        return this;
      };
    }

    AsyncGenerator.prototype.next = function (arg) {
      return this._invoke("next", arg);
    };

    AsyncGenerator.prototype.throw = function (arg) {
      return this._invoke("throw", arg);
    };

    AsyncGenerator.prototype.return = function (arg) {
      return this._invoke("return", arg);
    };

    return {
      wrap: function (fn) {
        return function () {
          return new AsyncGenerator(fn.apply(this, arguments));
        };
      },
      await: function (value) {
        return new AwaitValue(value);
      }
    };
  }();

  var asyncGeneratorDelegate = function (inner, awaitWrap) {
    var iter = {},
        waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) {
        resolve(inner[key](value));
      });
      return {
        done: false,
        value: awaitWrap(value)
      };
    }

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () {
        return this;
      };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }

      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }

        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        return pump("return", value);
      };
    }

    return iter;
  };

  var asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineEnumerableProperties = function (obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    return obj;
  };

  var defaults = function (obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);

      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }

    return obj;
  };

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var _instanceof = function (left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  };

  var interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  };

  var interopRequireWildcard = function (obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  };

  var newArrowCheck = function (innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  };

  var objectDestructuringEmpty = function (obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var selfGlobal = typeof global === "undefined" ? self : global;

  var set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent !== null) {
        set(parent, property, value, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      desc.value = value;
    } else {
      var setter = desc.set;

      if (setter !== undefined) {
        setter.call(receiver, value);
      }
    }

    return value;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var slicedToArrayLoose = function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      var _arr = [];

      for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        _arr.push(_step.value);

        if (i && _arr.length === i) break;
      }

      return _arr;
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };

  var taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  var taggedTemplateLiteralLoose = function (strings, raw) {
    strings.raw = raw;
    return strings;
  };

  var temporalRef = function (val, name, undef) {
    if (val === undef) {
      throw new ReferenceError(name + " is not defined - temporal dead zone");
    } else {
      return val;
    }
  };

  var temporalUndefined = {};

  var toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var babelHelpers = /*#__PURE__*/Object.freeze({
    jsx: jsx,
    asyncIterator: asyncIterator,
    asyncGenerator: asyncGenerator,
    asyncGeneratorDelegate: asyncGeneratorDelegate,
    asyncToGenerator: asyncToGenerator,
    classCallCheck: classCallCheck,
    createClass: createClass,
    defineEnumerableProperties: defineEnumerableProperties,
    defaults: defaults,
    defineProperty: defineProperty,
    get: get,
    inherits: inherits,
    interopRequireDefault: interopRequireDefault,
    interopRequireWildcard: interopRequireWildcard,
    newArrowCheck: newArrowCheck,
    objectDestructuringEmpty: objectDestructuringEmpty,
    objectWithoutProperties: objectWithoutProperties,
    possibleConstructorReturn: possibleConstructorReturn,
    selfGlobal: selfGlobal,
    set: set,
    slicedToArray: slicedToArray,
    slicedToArrayLoose: slicedToArrayLoose,
    taggedTemplateLiteral: taggedTemplateLiteral,
    taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
    temporalRef: temporalRef,
    temporalUndefined: temporalUndefined,
    toArray: toArray,
    toConsumableArray: toConsumableArray,
    typeof: _typeof,
    extends: _extends,
    instanceof: _instanceof
  });

  var cov_1fog8hqfea = function () {
      var path = "/Users/Jacky/Documents/GitHub/fetch-plugin/src/main.js",
          hash = "459d5adb812eb1804cdaf6ef2da8973ab6fc4c85",
          Function = function () {}.constructor,
          global = new Function('return this')(),
          gcv = "__coverage__",
          coverageData = {
          path: "/Users/Jacky/Documents/GitHub/fetch-plugin/src/main.js",
          statementMap: {
              "0": {
                  start: {
                      line: 4,
                      column: 20
                  },
                  end: {
                      line: 6,
                      column: 1
                  }
              },
              "1": {
                  start: {
                      line: 8,
                      column: 19
                  },
                  end: {
                      line: 19,
                      column: 1
                  }
              },
              "2": {
                  start: {
                      line: 17,
                      column: 8
                  },
                  end: {
                      line: 17,
                      column: 20
                  }
              },
              "3": {
                  start: {
                      line: 21,
                      column: 19
                  },
                  end: {
                      line: 33,
                      column: 1
                  }
              },
              "4": {
                  start: {
                      line: 22,
                      column: 20
                  },
                  end: {
                      line: 22,
                      column: 46
                  }
              },
              "5": {
                  start: {
                      line: 23,
                      column: 24
                  },
                  end: {
                      line: 23,
                      column: 75
                  }
              },
              "6": {
                  start: {
                      line: 24,
                      column: 24
                  },
                  end: {
                      line: 24,
                      column: 28
                  }
              },
              "7": {
                  start: {
                      line: 26,
                      column: 4
                  },
                  end: {
                      line: 26,
                      column: 62
                  }
              },
              "8": {
                  start: {
                      line: 27,
                      column: 4
                  },
                  end: {
                      line: 27,
                      column: 54
                  }
              },
              "9": {
                  start: {
                      line: 29,
                      column: 4
                  },
                  end: {
                      line: 32,
                      column: 5
                  }
              },
              "10": {
                  start: {
                      line: 35,
                      column: 17
                  },
                  end: {
                      line: 38,
                      column: 1
                  }
              },
              "11": {
                  start: {
                      line: 36,
                      column: 4
                  },
                  end: {
                      line: 36,
                      column: 54
                  }
              },
              "12": {
                  start: {
                      line: 37,
                      column: 4
                  },
                  end: {
                      line: 37,
                      column: 55
                  }
              },
              "13": {
                  start: {
                      line: 40,
                      column: 16
                  },
                  end: {
                      line: 50,
                      column: 1
                  }
              },
              "14": {
                  start: {
                      line: 41,
                      column: 24
                  },
                  end: {
                      line: 41,
                      column: 27
                  }
              },
              "15": {
                  start: {
                      line: 43,
                      column: 4
                  },
                  end: {
                      line: 49,
                      column: 6
                  }
              },
              "16": {
                  start: {
                      line: 44,
                      column: 8
                  },
                  end: {
                      line: 48,
                      column: 9
                  }
              },
              "17": {
                  start: {
                      line: 45,
                      column: 12
                  },
                  end: {
                      line: 45,
                      column: 35
                  }
              },
              "18": {
                  start: {
                      line: 47,
                      column: 12
                  },
                  end: {
                      line: 47,
                      column: 108
                  }
              },
              "19": {
                  start: {
                      line: 52,
                      column: 18
                  },
                  end: {
                      line: 58,
                      column: 1
                  }
              },
              "20": {
                  start: {
                      line: 53,
                      column: 4
                  },
                  end: {
                      line: 57,
                      column: 5
                  }
              },
              "21": {
                  start: {
                      line: 54,
                      column: 8
                  },
                  end: {
                      line: 54,
                      column: 23
                  }
              },
              "22": {
                  start: {
                      line: 56,
                      column: 8
                  },
                  end: {
                      line: 56,
                      column: 85
                  }
              },
              "23": {
                  start: {
                      line: 60,
                      column: 16
                  },
                  end: {
                      line: 70,
                      column: 1
                  }
              },
              "24": {
                  start: {
                      line: 61,
                      column: 4
                  },
                  end: {
                      line: 63,
                      column: 5
                  }
              },
              "25": {
                  start: {
                      line: 62,
                      column: 8
                  },
                  end: {
                      line: 62,
                      column: 18
                  }
              },
              "26": {
                  start: {
                      line: 65,
                      column: 15
                  },
                  end: {
                      line: 65,
                      column: 17
                  }
              },
              "27": {
                  start: {
                      line: 66,
                      column: 4
                  },
                  end: {
                      line: 68,
                      column: 5
                  }
              },
              "28": {
                  start: {
                      line: 67,
                      column: 8
                  },
                  end: {
                      line: 67,
                      column: 80
                  }
              },
              "29": {
                  start: {
                      line: 69,
                      column: 4
                  },
                  end: {
                      line: 69,
                      column: 70
                  }
              },
              "30": {
                  start: {
                      line: 72,
                      column: 14
                  },
                  end: {
                      line: 78,
                      column: 1
                  }
              },
              "31": {
                  start: {
                      line: 73,
                      column: 22
                  },
                  end: {
                      line: 73,
                      column: 75
                  }
              },
              "32": {
                  start: {
                      line: 74,
                      column: 19
                  },
                  end: {
                      line: 74,
                      column: 39
                  }
              },
              "33": {
                  start: {
                      line: 76,
                      column: 4
                  },
                  end: {
                      line: 77,
                      column: 64
                  }
              },
              "34": {
                  start: {
                      line: 80,
                      column: 17
                  },
                  end: {
                      line: 86,
                      column: 1
                  }
              },
              "35": {
                  start: {
                      line: 81,
                      column: 22
                  },
                  end: {
                      line: 81,
                      column: 78
                  }
              },
              "36": {
                  start: {
                      line: 82,
                      column: 19
                  },
                  end: {
                      line: 82,
                      column: 39
                  }
              },
              "37": {
                  start: {
                      line: 84,
                      column: 4
                  },
                  end: {
                      line: 85,
                      column: 64
                  }
              },
              "38": {
                  start: {
                      line: 88,
                      column: 15
                  },
                  end: {
                      line: 94,
                      column: 1
                  }
              },
              "39": {
                  start: {
                      line: 89,
                      column: 22
                  },
                  end: {
                      line: 89,
                      column: 104
                  }
              },
              "40": {
                  start: {
                      line: 90,
                      column: 19
                  },
                  end: {
                      line: 90,
                      column: 22
                  }
              },
              "41": {
                  start: {
                      line: 92,
                      column: 4
                  },
                  end: {
                      line: 93,
                      column: 64
                  }
              },
              "42": {
                  start: {
                      line: 96,
                      column: 14
                  },
                  end: {
                      line: 102,
                      column: 1
                  }
              },
              "43": {
                  start: {
                      line: 97,
                      column: 22
                  },
                  end: {
                      line: 97,
                      column: 103
                  }
              },
              "44": {
                  start: {
                      line: 98,
                      column: 19
                  },
                  end: {
                      line: 98,
                      column: 22
                  }
              },
              "45": {
                  start: {
                      line: 100,
                      column: 4
                  },
                  end: {
                      line: 101,
                      column: 64
                  }
              },
              "46": {
                  start: {
                      line: 104,
                      column: 22
                  },
                  end: {
                      line: 108,
                      column: 1
                  }
              },
              "47": {
                  start: {
                      line: 105,
                      column: 4
                  },
                  end: {
                      line: 105,
                      column: 86
                  }
              },
              "48": {
                  start: {
                      line: 107,
                      column: 4
                  },
                  end: {
                      line: 107,
                      column: 15
                  }
              },
              "49": {
                  start: {
                      line: 110,
                      column: 23
                  },
                  end: {
                      line: 115,
                      column: 1
                  }
              },
              "50": {
                  start: {
                      line: 111,
                      column: 4
                  },
                  end: {
                      line: 111,
                      column: 83
                  }
              },
              "51": {
                  start: {
                      line: 113,
                      column: 4
                  },
                  end: {
                      line: 113,
                      column: 61
                  }
              },
              "52": {
                  start: {
                      line: 114,
                      column: 4
                  },
                  end: {
                      line: 114,
                      column: 15
                  }
              },
              "53": {
                  start: {
                      line: 117,
                      column: 15
                  },
                  end: {
                      line: 142,
                      column: 1
                  }
              },
              "54": {
                  start: {
                      line: 118,
                      column: 24
                  },
                  end: {
                      line: 118,
                      column: 45
                  }
              },
              "55": {
                  start: {
                      line: 119,
                      column: 23
                  },
                  end: {
                      line: 119,
                      column: 55
                  }
              },
              "56": {
                  start: {
                      line: 120,
                      column: 4
                  },
                  end: {
                      line: 120,
                      column: 60
                  }
              },
              "57": {
                  start: {
                      line: 121,
                      column: 19
                  },
                  end: {
                      line: 121,
                      column: 39
                  }
              },
              "58": {
                  start: {
                      line: 122,
                      column: 15
                  },
                  end: {
                      line: 122,
                      column: 90
                  }
              },
              "59": {
                  start: {
                      line: 124,
                      column: 4
                  },
                  end: {
                      line: 124,
                      column: 46
                  }
              },
              "60": {
                  start: {
                      line: 125,
                      column: 4
                  },
                  end: {
                      line: 125,
                      column: 49
                  }
              },
              "61": {
                  start: {
                      line: 126,
                      column: 4
                  },
                  end: {
                      line: 126,
                      column: 44
                  }
              },
              "62": {
                  start: {
                      line: 127,
                      column: 4
                  },
                  end: {
                      line: 127,
                      column: 44
                  }
              },
              "63": {
                  start: {
                      line: 128,
                      column: 4
                  },
                  end: {
                      line: 128,
                      column: 52
                  }
              },
              "64": {
                  start: {
                      line: 130,
                      column: 4
                  },
                  end: {
                      line: 141,
                      column: 6
                  }
              },
              "65": {
                  start: {
                      line: 131,
                      column: 8
                  },
                  end: {
                      line: 134,
                      column: 9
                  }
              },
              "66": {
                  start: {
                      line: 132,
                      column: 12
                  },
                  end: {
                      line: 132,
                      column: 28
                  }
              },
              "67": {
                  start: {
                      line: 133,
                      column: 12
                  },
                  end: {
                      line: 133,
                      column: 42
                  }
              },
              "68": {
                  start: {
                      line: 136,
                      column: 8
                  },
                  end: {
                      line: 139,
                      column: 9
                  }
              },
              "69": {
                  start: {
                      line: 137,
                      column: 12
                  },
                  end: {
                      line: 137,
                      column: 20
                  }
              },
              "70": {
                  start: {
                      line: 138,
                      column: 12
                  },
                  end: {
                      line: 138,
                      column: 42
                  }
              },
              "71": {
                  start: {
                      line: 144,
                      column: 13
                  },
                  end: {
                      line: 171,
                      column: 1
                  }
              },
              "72": {
                  start: {
                      line: 145,
                      column: 4
                  },
                  end: {
                      line: 170,
                      column: 24
                  }
              },
              "73": {
                  start: {
                      line: 146,
                      column: 20
                  },
                  end: {
                      line: 146,
                      column: 21
                  }
              },
              "74": {
                  start: {
                      line: 148,
                      column: 8
                  },
                  end: {
                      line: 169,
                      column: 10
                  }
              },
              "75": {
                  start: {
                      line: 152,
                      column: 28
                  },
                  end: {
                      line: 152,
                      column: 69
                  }
              },
              "76": {
                  start: {
                      line: 154,
                      column: 12
                  },
                  end: {
                      line: 158,
                      column: 41
                  }
              },
              "77": {
                  start: {
                      line: 155,
                      column: 28
                  },
                  end: {
                      line: 155,
                      column: 61
                  }
              },
              "78": {
                  start: {
                      line: 156,
                      column: 16
                  },
                  end: {
                      line: 156,
                      column: 53
                  }
              },
              "79": {
                  start: {
                      line: 157,
                      column: 16
                  },
                  end: {
                      line: 157,
                      column: 29
                  }
              },
              "80": {
                  start: {
                      line: 159,
                      column: 12
                  },
                  end: {
                      line: 159,
                      column: 35
                  }
              },
              "81": {
                  start: {
                      line: 161,
                      column: 12
                  },
                  end: {
                      line: 161,
                      column: 31
                  }
              },
              "82": {
                  start: {
                      line: 162,
                      column: 12
                  },
                  end: {
                      line: 162,
                      column: 46
                  }
              },
              "83": {
                  start: {
                      line: 163,
                      column: 12
                  },
                  end: {
                      line: 163,
                      column: 29
                  }
              },
              "84": {
                  start: {
                      line: 165,
                      column: 12
                  },
                  end: {
                      line: 165,
                      column: 31
                  }
              },
              "85": {
                  start: {
                      line: 166,
                      column: 12
                  },
                  end: {
                      line: 166,
                      column: 27
                  }
              },
              "86": {
                  start: {
                      line: 167,
                      column: 12
                  },
                  end: {
                      line: 167,
                      column: 43
                  }
              },
              "87": {
                  start: {
                      line: 168,
                      column: 12
                  },
                  end: {
                      line: 168,
                      column: 25
                  }
              }
          },
          fnMap: {
              "0": {
                  name: "(anonymous_0)",
                  decl: {
                      start: {
                          line: 16,
                          column: 4
                      },
                      end: {
                          line: 16,
                          column: 5
                      }
                  },
                  loc: {
                      start: {
                          line: 16,
                          column: 22
                      },
                      end: {
                          line: 18,
                          column: 5
                      }
                  },
                  line: 16
              },
              "1": {
                  name: "(anonymous_1)",
                  decl: {
                      start: {
                          line: 21,
                          column: 19
                      },
                      end: {
                          line: 21,
                          column: 20
                      }
                  },
                  loc: {
                      start: {
                          line: 21,
                          column: 32
                      },
                      end: {
                          line: 33,
                          column: 1
                      }
                  },
                  line: 21
              },
              "2": {
                  name: "(anonymous_2)",
                  decl: {
                      start: {
                          line: 35,
                          column: 17
                      },
                      end: {
                          line: 35,
                          column: 18
                      }
                  },
                  loc: {
                      start: {
                          line: 35,
                          column: 30
                      },
                      end: {
                          line: 38,
                          column: 1
                      }
                  },
                  line: 35
              },
              "3": {
                  name: "(anonymous_3)",
                  decl: {
                      start: {
                          line: 40,
                          column: 16
                      },
                      end: {
                          line: 40,
                          column: 17
                      }
                  },
                  loc: {
                      start: {
                          line: 40,
                          column: 30
                      },
                      end: {
                          line: 50,
                          column: 1
                      }
                  },
                  line: 40
              },
              "4": {
                  name: "(anonymous_4)",
                  decl: {
                      start: {
                          line: 43,
                          column: 32
                      },
                      end: {
                          line: 43,
                          column: 33
                      }
                  },
                  loc: {
                      start: {
                          line: 43,
                          column: 42
                      },
                      end: {
                          line: 49,
                          column: 5
                      }
                  },
                  line: 43
              },
              "5": {
                  name: "(anonymous_5)",
                  decl: {
                      start: {
                          line: 52,
                          column: 18
                      },
                      end: {
                          line: 52,
                          column: 19
                      }
                  },
                  loc: {
                      start: {
                          line: 52,
                          column: 32
                      },
                      end: {
                          line: 58,
                          column: 1
                      }
                  },
                  line: 52
              },
              "6": {
                  name: "(anonymous_6)",
                  decl: {
                      start: {
                          line: 60,
                          column: 16
                      },
                      end: {
                          line: 60,
                          column: 17
                      }
                  },
                  loc: {
                      start: {
                          line: 60,
                          column: 36
                      },
                      end: {
                          line: 70,
                          column: 1
                      }
                  },
                  line: 60
              },
              "7": {
                  name: "(anonymous_7)",
                  decl: {
                      start: {
                          line: 72,
                          column: 14
                      },
                      end: {
                          line: 72,
                          column: 15
                      }
                  },
                  loc: {
                      start: {
                          line: 72,
                          column: 47
                      },
                      end: {
                          line: 78,
                          column: 1
                      }
                  },
                  line: 72
              },
              "8": {
                  name: "(anonymous_8)",
                  decl: {
                      start: {
                          line: 80,
                          column: 17
                      },
                      end: {
                          line: 80,
                          column: 18
                      }
                  },
                  loc: {
                      start: {
                          line: 80,
                          column: 50
                      },
                      end: {
                          line: 86,
                          column: 1
                      }
                  },
                  line: 80
              },
              "9": {
                  name: "(anonymous_9)",
                  decl: {
                      start: {
                          line: 88,
                          column: 15
                      },
                      end: {
                          line: 88,
                          column: 16
                      }
                  },
                  loc: {
                      start: {
                          line: 88,
                          column: 48
                      },
                      end: {
                          line: 94,
                          column: 1
                      }
                  },
                  line: 88
              },
              "10": {
                  name: "(anonymous_10)",
                  decl: {
                      start: {
                          line: 96,
                          column: 14
                      },
                      end: {
                          line: 96,
                          column: 15
                      }
                  },
                  loc: {
                      start: {
                          line: 96,
                          column: 47
                      },
                      end: {
                          line: 102,
                          column: 1
                      }
                  },
                  line: 96
              },
              "11": {
                  name: "(anonymous_11)",
                  decl: {
                      start: {
                          line: 104,
                          column: 22
                      },
                      end: {
                          line: 104,
                          column: 23
                      }
                  },
                  loc: {
                      start: {
                          line: 104,
                          column: 32
                      },
                      end: {
                          line: 108,
                          column: 1
                      }
                  },
                  line: 104
              },
              "12": {
                  name: "(anonymous_12)",
                  decl: {
                      start: {
                          line: 110,
                          column: 23
                      },
                      end: {
                          line: 110,
                          column: 24
                      }
                  },
                  loc: {
                      start: {
                          line: 110,
                          column: 34
                      },
                      end: {
                          line: 115,
                          column: 1
                      }
                  },
                  line: 110
              },
              "13": {
                  name: "(anonymous_13)",
                  decl: {
                      start: {
                          line: 117,
                          column: 15
                      },
                      end: {
                          line: 117,
                          column: 16
                      }
                  },
                  loc: {
                      start: {
                          line: 117,
                          column: 48
                      },
                      end: {
                          line: 142,
                          column: 1
                      }
                  },
                  line: 117
              },
              "14": {
                  name: "(anonymous_14)",
                  decl: {
                      start: {
                          line: 130,
                          column: 23
                      },
                      end: {
                          line: 130,
                          column: 24
                      }
                  },
                  loc: {
                      start: {
                          line: 130,
                          column: 44
                      },
                      end: {
                          line: 141,
                          column: 5
                      }
                  },
                  line: 130
              },
              "15": {
                  name: "(anonymous_15)",
                  decl: {
                      start: {
                          line: 131,
                          column: 32
                      },
                      end: {
                          line: 131,
                          column: 33
                      }
                  },
                  loc: {
                      start: {
                          line: 131,
                          column: 45
                      },
                      end: {
                          line: 134,
                          column: 9
                      }
                  },
                  line: 131
              },
              "16": {
                  name: "(anonymous_16)",
                  decl: {
                      start: {
                          line: 136,
                          column: 31
                      },
                      end: {
                          line: 136,
                          column: 32
                      }
                  },
                  loc: {
                      start: {
                          line: 136,
                          column: 37
                      },
                      end: {
                          line: 139,
                          column: 9
                      }
                  },
                  line: 136
              },
              "17": {
                  name: "(anonymous_17)",
                  decl: {
                      start: {
                          line: 144,
                          column: 13
                      },
                      end: {
                          line: 144,
                          column: 14
                      }
                  },
                  loc: {
                      start: {
                          line: 144,
                          column: 35
                      },
                      end: {
                          line: 171,
                          column: 1
                      }
                  },
                  line: 144
              },
              "18": {
                  name: "(anonymous_18)",
                  decl: {
                      start: {
                          line: 145,
                          column: 23
                      },
                      end: {
                          line: 145,
                          column: 24
                      }
                  },
                  loc: {
                      start: {
                          line: 145,
                          column: 44
                      },
                      end: {
                          line: 170,
                          column: 5
                      }
                  },
                  line: 145
              },
              "19": {
                  name: "(anonymous_19)",
                  decl: {
                      start: {
                          line: 151,
                          column: 17
                      },
                      end: {
                          line: 151,
                          column: 18
                      }
                  },
                  loc: {
                      start: {
                          line: 151,
                          column: 28
                      },
                      end: {
                          line: 160,
                          column: 9
                      }
                  },
                  line: 151
              },
              "20": {
                  name: "(anonymous_20)",
                  decl: {
                      start: {
                          line: 154,
                          column: 31
                      },
                      end: {
                          line: 154,
                          column: 32
                      }
                  },
                  loc: {
                      start: {
                          line: 154,
                          column: 37
                      },
                      end: {
                          line: 158,
                          column: 13
                      }
                  },
                  line: 154
              },
              "21": {
                  name: "(anonymous_21)",
                  decl: {
                      start: {
                          line: 160,
                          column: 16
                      },
                      end: {
                          line: 160,
                          column: 17
                      }
                  },
                  loc: {
                      start: {
                          line: 160,
                          column: 30
                      },
                      end: {
                          line: 164,
                          column: 9
                      }
                  },
                  line: 160
              },
              "22": {
                  name: "(anonymous_22)",
                  decl: {
                      start: {
                          line: 164,
                          column: 11
                      },
                      end: {
                          line: 164,
                          column: 12
                      }
                  },
                  loc: {
                      start: {
                          line: 164,
                          column: 22
                      },
                      end: {
                          line: 169,
                          column: 9
                      }
                  },
                  line: 164
              }
          },
          branchMap: {
              "0": {
                  loc: {
                      start: {
                          line: 53,
                          column: 4
                      },
                      end: {
                          line: 57,
                          column: 5
                      }
                  },
                  type: "if",
                  locations: [{
                      start: {
                          line: 53,
                          column: 4
                      },
                      end: {
                          line: 57,
                          column: 5
                      }
                  }, {
                      start: {
                          line: 53,
                          column: 4
                      },
                      end: {
                          line: 57,
                          column: 5
                      }
                  }],
                  line: 53
              },
              "1": {
                  loc: {
                      start: {
                          line: 53,
                          column: 8
                      },
                      end: {
                          line: 53,
                          column: 83
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 53,
                          column: 9
                      },
                      end: {
                          line: 53,
                          column: 31
                      }
                  }, {
                      start: {
                          line: 53,
                          column: 35
                      },
                      end: {
                          line: 53,
                          column: 56
                      }
                  }, {
                      start: {
                          line: 53,
                          column: 61
                      },
                      end: {
                          line: 53,
                          column: 83
                      }
                  }],
                  line: 53
              },
              "2": {
                  loc: {
                      start: {
                          line: 60,
                          column: 22
                      },
                      end: {
                          line: 60,
                          column: 31
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 60,
                          column: 29
                      },
                      end: {
                          line: 60,
                          column: 31
                      }
                  }],
                  line: 60
              },
              "3": {
                  loc: {
                      start: {
                          line: 61,
                          column: 4
                      },
                      end: {
                          line: 63,
                          column: 5
                      }
                  },
                  type: "if",
                  locations: [{
                      start: {
                          line: 61,
                          column: 4
                      },
                      end: {
                          line: 63,
                          column: 5
                      }
                  }, {
                      start: {
                          line: 61,
                          column: 4
                      },
                      end: {
                          line: 63,
                          column: 5
                      }
                  }],
                  line: 61
              },
              "4": {
                  loc: {
                      start: {
                          line: 61,
                          column: 8
                      },
                      end: {
                          line: 61,
                          column: 100
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 61,
                          column: 8
                      },
                      end: {
                          line: 61,
                          column: 66
                      }
                  }, {
                      start: {
                          line: 61,
                          column: 70
                      },
                      end: {
                          line: 61,
                          column: 100
                      }
                  }],
                  line: 61
              },
              "5": {
                  loc: {
                      start: {
                          line: 69,
                          column: 18
                      },
                      end: {
                          line: 69,
                          column: 52
                      }
                  },
                  type: "cond-expr",
                  locations: [{
                      start: {
                          line: 69,
                          column: 44
                      },
                      end: {
                          line: 69,
                          column: 47
                      }
                  }, {
                      start: {
                          line: 69,
                          column: 50
                      },
                      end: {
                          line: 69,
                          column: 52
                      }
                  }],
                  line: 69
              },
              "6": {
                  loc: {
                      start: {
                          line: 72,
                          column: 20
                      },
                      end: {
                          line: 72,
                          column: 29
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 72,
                          column: 27
                      },
                      end: {
                          line: 72,
                          column: 29
                      }
                  }],
                  line: 72
              },
              "7": {
                  loc: {
                      start: {
                          line: 72,
                          column: 31
                      },
                      end: {
                          line: 72,
                          column: 42
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 72,
                          column: 40
                      },
                      end: {
                          line: 72,
                          column: 42
                      }
                  }],
                  line: 72
              },
              "8": {
                  loc: {
                      start: {
                          line: 80,
                          column: 23
                      },
                      end: {
                          line: 80,
                          column: 32
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 80,
                          column: 30
                      },
                      end: {
                          line: 80,
                          column: 32
                      }
                  }],
                  line: 80
              },
              "9": {
                  loc: {
                      start: {
                          line: 80,
                          column: 34
                      },
                      end: {
                          line: 80,
                          column: 45
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 80,
                          column: 43
                      },
                      end: {
                          line: 80,
                          column: 45
                      }
                  }],
                  line: 80
              },
              "10": {
                  loc: {
                      start: {
                          line: 88,
                          column: 21
                      },
                      end: {
                          line: 88,
                          column: 30
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 88,
                          column: 28
                      },
                      end: {
                          line: 88,
                          column: 30
                      }
                  }],
                  line: 88
              },
              "11": {
                  loc: {
                      start: {
                          line: 88,
                          column: 32
                      },
                      end: {
                          line: 88,
                          column: 43
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 88,
                          column: 41
                      },
                      end: {
                          line: 88,
                          column: 43
                      }
                  }],
                  line: 88
              },
              "12": {
                  loc: {
                      start: {
                          line: 96,
                          column: 20
                      },
                      end: {
                          line: 96,
                          column: 29
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 96,
                          column: 27
                      },
                      end: {
                          line: 96,
                          column: 29
                      }
                  }],
                  line: 96
              },
              "13": {
                  loc: {
                      start: {
                          line: 96,
                          column: 31
                      },
                      end: {
                          line: 96,
                          column: 42
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 96,
                          column: 40
                      },
                      end: {
                          line: 96,
                          column: 42
                      }
                  }],
                  line: 96
              },
              "14": {
                  loc: {
                      start: {
                          line: 105,
                          column: 4
                      },
                      end: {
                          line: 105,
                          column: 86
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 105,
                          column: 4
                      },
                      end: {
                          line: 105,
                          column: 51
                      }
                  }, {
                      start: {
                          line: 105,
                          column: 55
                      },
                      end: {
                          line: 105,
                          column: 86
                      }
                  }],
                  line: 105
              },
              "15": {
                  loc: {
                      start: {
                          line: 111,
                          column: 4
                      },
                      end: {
                          line: 111,
                          column: 83
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 111,
                          column: 4
                      },
                      end: {
                          line: 111,
                          column: 49
                      }
                  }, {
                      start: {
                          line: 111,
                          column: 53
                      },
                      end: {
                          line: 111,
                          column: 83
                      }
                  }],
                  line: 111
              },
              "16": {
                  loc: {
                      start: {
                          line: 113,
                          column: 12
                      },
                      end: {
                          line: 113,
                          column: 61
                      }
                  },
                  type: "cond-expr",
                  locations: [{
                      start: {
                          line: 113,
                          column: 37
                      },
                      end: {
                          line: 113,
                          column: 42
                      }
                  }, {
                      start: {
                          line: 113,
                          column: 45
                      },
                      end: {
                          line: 113,
                          column: 61
                      }
                  }],
                  line: 113
              },
              "17": {
                  loc: {
                      start: {
                          line: 117,
                          column: 21
                      },
                      end: {
                          line: 117,
                          column: 30
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 117,
                          column: 28
                      },
                      end: {
                          line: 117,
                          column: 30
                      }
                  }],
                  line: 117
              },
              "18": {
                  loc: {
                      start: {
                          line: 117,
                          column: 32
                      },
                      end: {
                          line: 117,
                          column: 43
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 117,
                          column: 41
                      },
                      end: {
                          line: 117,
                          column: 43
                      }
                  }],
                  line: 117
              },
              "19": {
                  loc: {
                      start: {
                          line: 120,
                          column: 9
                      },
                      end: {
                          line: 120,
                          column: 43
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 120,
                          column: 9
                      },
                      end: {
                          line: 120,
                          column: 28
                      }
                  }, {
                      start: {
                          line: 120,
                          column: 32
                      },
                      end: {
                          line: 120,
                          column: 43
                      }
                  }],
                  line: 120
              },
              "20": {
                  loc: {
                      start: {
                          line: 122,
                          column: 15
                      },
                      end: {
                          line: 122,
                          column: 90
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 122,
                          column: 15
                      },
                      end: {
                          line: 122,
                          column: 28
                      }
                  }, {
                      start: {
                          line: 122,
                          column: 32
                      },
                      end: {
                          line: 122,
                          column: 62
                      }
                  }, {
                      start: {
                          line: 122,
                          column: 66
                      },
                      end: {
                          line: 122,
                          column: 90
                      }
                  }],
                  line: 122
              }
          },
          s: {
              "0": 0,
              "1": 0,
              "2": 0,
              "3": 0,
              "4": 0,
              "5": 0,
              "6": 0,
              "7": 0,
              "8": 0,
              "9": 0,
              "10": 0,
              "11": 0,
              "12": 0,
              "13": 0,
              "14": 0,
              "15": 0,
              "16": 0,
              "17": 0,
              "18": 0,
              "19": 0,
              "20": 0,
              "21": 0,
              "22": 0,
              "23": 0,
              "24": 0,
              "25": 0,
              "26": 0,
              "27": 0,
              "28": 0,
              "29": 0,
              "30": 0,
              "31": 0,
              "32": 0,
              "33": 0,
              "34": 0,
              "35": 0,
              "36": 0,
              "37": 0,
              "38": 0,
              "39": 0,
              "40": 0,
              "41": 0,
              "42": 0,
              "43": 0,
              "44": 0,
              "45": 0,
              "46": 0,
              "47": 0,
              "48": 0,
              "49": 0,
              "50": 0,
              "51": 0,
              "52": 0,
              "53": 0,
              "54": 0,
              "55": 0,
              "56": 0,
              "57": 0,
              "58": 0,
              "59": 0,
              "60": 0,
              "61": 0,
              "62": 0,
              "63": 0,
              "64": 0,
              "65": 0,
              "66": 0,
              "67": 0,
              "68": 0,
              "69": 0,
              "70": 0,
              "71": 0,
              "72": 0,
              "73": 0,
              "74": 0,
              "75": 0,
              "76": 0,
              "77": 0,
              "78": 0,
              "79": 0,
              "80": 0,
              "81": 0,
              "82": 0,
              "83": 0,
              "84": 0,
              "85": 0,
              "86": 0,
              "87": 0
          },
          f: {
              "0": 0,
              "1": 0,
              "2": 0,
              "3": 0,
              "4": 0,
              "5": 0,
              "6": 0,
              "7": 0,
              "8": 0,
              "9": 0,
              "10": 0,
              "11": 0,
              "12": 0,
              "13": 0,
              "14": 0,
              "15": 0,
              "16": 0,
              "17": 0,
              "18": 0,
              "19": 0,
              "20": 0,
              "21": 0,
              "22": 0
          },
          b: {
              "0": [0, 0],
              "1": [0, 0, 0],
              "2": [0],
              "3": [0, 0],
              "4": [0, 0],
              "5": [0, 0],
              "6": [0],
              "7": [0],
              "8": [0],
              "9": [0],
              "10": [0],
              "11": [0],
              "12": [0],
              "13": [0],
              "14": [0, 0],
              "15": [0, 0],
              "16": [0, 0],
              "17": [0],
              "18": [0],
              "19": [0, 0],
              "20": [0, 0, 0]
          },
          _coverageSchema: "d34fc3e6b8297bcde183f5492bcb8fcb36775295"
      },
          coverage = global[gcv] || (global[gcv] = {});

      if (coverage[path] && coverage[path].hash === hash) {
          return coverage[path];
      }

      coverageData.hash = hash;
      return coverage[path] = coverageData;
  }();

  var globalHeaders = (cov_1fog8hqfea.s[0]++, {
      "Content-Type": "application/json"
  });

  var globalOption = (cov_1fog8hqfea.s[1]++, {
      headers: new Headers(globalHeaders),
      mode: "same-origin",
      credentials: "include",
      cache: "reload",
      redirect: "follow",
      referrer: "client",
      timeout: 30000,
      fetchStart: function fetchStart(param) {
          cov_1fog8hqfea.f[0]++;
          cov_1fog8hqfea.s[2]++;

          return param;
      }
  });

  cov_1fog8hqfea.s[3]++;
  var mergeOptions = function mergeOptions() {
      var _babelHelpers;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
      }

      cov_1fog8hqfea.f[1]++;

      var myOptions = (cov_1fog8hqfea.s[4]++, (_babelHelpers = babelHelpers).extends.apply(_babelHelpers, [{}].concat(args)));
      var resultHealers = (cov_1fog8hqfea.s[5]++, _extends({}, globalHeaders, myOptions.headers));
      var resultOptions = (cov_1fog8hqfea.s[6]++, null);

      cov_1fog8hqfea.s[7]++;
      resultOptions = _extends({}, globalOption, myOptions);
      cov_1fog8hqfea.s[8]++;
      resultOptions.headers = new Headers(resultHealers);

      cov_1fog8hqfea.s[9]++;
      return {
          resultOptions: resultOptions,
          resultHealers: resultHealers
      };
  };

  cov_1fog8hqfea.s[10]++;
  var setOptions = function setOptions(options) {
      cov_1fog8hqfea.f[2]++;
      cov_1fog8hqfea.s[11]++;

      globalOption = mergeOptions(options).resultOptions;
      cov_1fog8hqfea.s[12]++;
      globalHeaders = mergeOptions(options).resultHealers;
  };

  cov_1fog8hqfea.s[13]++;
  var parseJSON = function parseJSON(response) {
      cov_1fog8hqfea.f[3]++;

      var maxErrorRes = (cov_1fog8hqfea.s[14]++, 500);

      cov_1fog8hqfea.s[15]++;
      return response.text().then(function (text) {
          cov_1fog8hqfea.f[4]++;
          cov_1fog8hqfea.s[16]++;

          try {
              cov_1fog8hqfea.s[17]++;

              return JSON.parse(text);
          } catch (err) {
              cov_1fog8hqfea.s[18]++;

              throw new Error("JSON Parse Error: " + err + ", URL: " + response.url + ", " + text.slice(0, maxErrorRes));
          }
      });
  };

  cov_1fog8hqfea.s[19]++;
  var checkStatus = function checkStatus(response) {
      cov_1fog8hqfea.f[5]++;
      cov_1fog8hqfea.s[20]++;

      if ((cov_1fog8hqfea.b[1][0]++, response.status >= 200) && (cov_1fog8hqfea.b[1][1]++, response.status < 300) || (cov_1fog8hqfea.b[1][2]++, response.status == 304)) {
          cov_1fog8hqfea.b[0][0]++;
          cov_1fog8hqfea.s[21]++;

          return response;
      } else {
          cov_1fog8hqfea.b[0][1]++;
          cov_1fog8hqfea.s[22]++;

          throw new Error("HTTP Status Code: " + response.status + ", URL: " + response.url);
      }
  };

  cov_1fog8hqfea.s[23]++;
  var setGetURL = function setGetURL(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[2][0]++, {});
      cov_1fog8hqfea.f[6]++;
      cov_1fog8hqfea.s[24]++;

      if ((cov_1fog8hqfea.b[4][0]++, Object.prototype.toString.call(data) !== "[object Object]") || (cov_1fog8hqfea.b[4][1]++, Object.keys(data).length === 0)) {
          cov_1fog8hqfea.b[3][0]++;
          cov_1fog8hqfea.s[25]++;

          return url;
      } else {
          cov_1fog8hqfea.b[3][1]++;
      }

      var list = (cov_1fog8hqfea.s[26]++, []);
      cov_1fog8hqfea.s[27]++;
      for (var key in data) {
          cov_1fog8hqfea.s[28]++;

          list.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
      }
      cov_1fog8hqfea.s[29]++;
      return url + (url.indexOf("?") === -1 ? (cov_1fog8hqfea.b[5][0]++, "?") : (cov_1fog8hqfea.b[5][1]++, "")) + list.join("&");
  };

  cov_1fog8hqfea.s[30]++;
  var getJSON = function getJSON(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[6][0]++, {});
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1fog8hqfea.b[7][0]++, {});
      cov_1fog8hqfea.f[7]++;

      var fetchOption = (cov_1fog8hqfea.s[31]++, mergeOptions({ method: "GET" }, option).resultOptions);
      var fetchURL = (cov_1fog8hqfea.s[32]++, setGetURL(url, data));

      cov_1fog8hqfea.s[33]++;
      return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
  };

  cov_1fog8hqfea.s[34]++;
  var deleteJSON = function deleteJSON(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[8][0]++, {});
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1fog8hqfea.b[9][0]++, {});
      cov_1fog8hqfea.f[8]++;

      var fetchOption = (cov_1fog8hqfea.s[35]++, mergeOptions({ method: "DELETE" }, option).resultOptions);
      var fetchURL = (cov_1fog8hqfea.s[36]++, setGetURL(url, data));

      cov_1fog8hqfea.s[37]++;
      return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
  };

  cov_1fog8hqfea.s[38]++;
  var postJSON = function postJSON(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[10][0]++, {});
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1fog8hqfea.b[11][0]++, {});
      cov_1fog8hqfea.f[9]++;

      var fetchOption = (cov_1fog8hqfea.s[39]++, mergeOptions({ method: "POST", body: JSON.stringify(data) }, option).resultOptions);
      var fetchURL = (cov_1fog8hqfea.s[40]++, url);

      cov_1fog8hqfea.s[41]++;
      return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
  };

  cov_1fog8hqfea.s[42]++;
  var putJSON = function putJSON(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[12][0]++, {});
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1fog8hqfea.b[13][0]++, {});
      cov_1fog8hqfea.f[10]++;

      var fetchOption = (cov_1fog8hqfea.s[43]++, mergeOptions({ method: "PUT", body: JSON.stringify(data) }, option).resultOptions);
      var fetchURL = (cov_1fog8hqfea.s[44]++, url);

      cov_1fog8hqfea.s[45]++;
      return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
  };

  cov_1fog8hqfea.s[46]++;
  var handleFetchPass = function handleFetchPass(data) {
      cov_1fog8hqfea.f[11]++;
      cov_1fog8hqfea.s[47]++;

      (cov_1fog8hqfea.b[14][0]++, typeof globalOption.fetchSuccess === "function") && (cov_1fog8hqfea.b[14][1]++, globalOption.fetchSuccess(data));

      cov_1fog8hqfea.s[48]++;
      return data;
  };

  cov_1fog8hqfea.s[49]++;
  var handleFetchError = function handleFetchError(error) {
      cov_1fog8hqfea.f[12]++;
      cov_1fog8hqfea.s[50]++;

      (cov_1fog8hqfea.b[15][0]++, typeof globalOption.fetchError === "function") && (cov_1fog8hqfea.b[15][1]++, globalOption.fetchError(error));

      cov_1fog8hqfea.s[51]++;
      error = error instanceof Error ? (cov_1fog8hqfea.b[16][0]++, error) : (cov_1fog8hqfea.b[16][1]++, new Error(error));
      cov_1fog8hqfea.s[52]++;
      throw error;
  };

  cov_1fog8hqfea.s[53]++;
  var getJSONP = function getJSONP(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[17][0]++, {});
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1fog8hqfea.b[18][0]++, {});
      cov_1fog8hqfea.f[13]++;

      var callbackValue = (cov_1fog8hqfea.s[54]++, "jsonp" + +new Date());
      var jsonpElement = (cov_1fog8hqfea.s[55]++, document.createElement("script"));
      cov_1fog8hqfea.s[56]++;
      data[(cov_1fog8hqfea.b[19][0]++, option.callbackName) || (cov_1fog8hqfea.b[19][1]++, "_callback")] = callbackValue;
      var fetchURL = (cov_1fog8hqfea.s[57]++, setGetURL(url, data));
      var head = (cov_1fog8hqfea.s[58]++, (cov_1fog8hqfea.b[20][0]++, document.head) || (cov_1fog8hqfea.b[20][1]++, document.querySelector("head")) || (cov_1fog8hqfea.b[20][2]++, document.documentElement));

      cov_1fog8hqfea.s[59]++;
      jsonpElement.setAttribute("src", fetchURL);
      cov_1fog8hqfea.s[60]++;
      jsonpElement.setAttribute("charset", "utf-8");
      cov_1fog8hqfea.s[61]++;
      jsonpElement.setAttribute("defer", true);
      cov_1fog8hqfea.s[62]++;
      jsonpElement.setAttribute("async", true);
      cov_1fog8hqfea.s[63]++;
      head.insertBefore(jsonpElement, head.firstChild);

      cov_1fog8hqfea.s[64]++;
      return new Promise(function (resolve, reject) {
          cov_1fog8hqfea.f[14]++;
          cov_1fog8hqfea.s[65]++;

          window[callbackValue] = function (payload) {
              cov_1fog8hqfea.f[15]++;
              cov_1fog8hqfea.s[66]++;

              resolve(payload);
              cov_1fog8hqfea.s[67]++;
              head.removeChild(jsonpElement);
          };

          cov_1fog8hqfea.s[68]++;
          jsonpElement.onerror = function () {
              cov_1fog8hqfea.f[16]++;
              cov_1fog8hqfea.s[69]++;

              reject();
              cov_1fog8hqfea.s[70]++;
              head.removeChild(jsonpElement);
          };
      });
  };

  cov_1fog8hqfea.s[71]++;
  var _fetch = function _fetch(url, fetchOption) {
      cov_1fog8hqfea.f[17]++;
      cov_1fog8hqfea.s[72]++;

      return new Promise(function (resolve, reject) {
          cov_1fog8hqfea.f[18]++;

          var timer = (cov_1fog8hqfea.s[73]++, 0);

          cov_1fog8hqfea.s[74]++;
          Promise.resolve(fetchOption.fetchStart({
              url: url,
              fetchOption: fetchOption
          })).then(function (param) {
              cov_1fog8hqfea.f[19]++;

              var myRequest = (cov_1fog8hqfea.s[75]++, new Request(param.url, param.fetchOption));

              cov_1fog8hqfea.s[76]++;
              timer = setTimeout(function () {
                  cov_1fog8hqfea.f[20]++;

                  var error = (cov_1fog8hqfea.s[77]++, new Error(param.url + " timeout"));
                  cov_1fog8hqfea.s[78]++;
                  error.fetchOption = param.fetchOption;
                  cov_1fog8hqfea.s[79]++;
                  reject(error);
              }, param.fetchOption.timeout);
              cov_1fog8hqfea.s[80]++;
              return fetch(myRequest);
          }).then(function (response) {
              cov_1fog8hqfea.f[21]++;
              cov_1fog8hqfea.s[81]++;

              clearTimeout(timer);
              cov_1fog8hqfea.s[82]++;
              response.fetchOption = fetchOption;
              cov_1fog8hqfea.s[83]++;
              resolve(response);
          }, function (error) {
              cov_1fog8hqfea.f[22]++;
              cov_1fog8hqfea.s[84]++;

              clearTimeout(timer);
              cov_1fog8hqfea.s[85]++;
              error.url = url;
              cov_1fog8hqfea.s[86]++;
              error.fetchOption = fetchOption;
              cov_1fog8hqfea.s[87]++;
              reject(error);
          });
      }).then(checkStatus);
  };

  var main = {
      setOptions: setOptions,
      getJSONP: getJSONP,
      getJSON: getJSON,
      postJSON: postJSON,
      putJSON: putJSON,
      deleteJSON: deleteJSON
  };

  return main;

})));

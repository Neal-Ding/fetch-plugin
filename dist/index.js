"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require("whatwg-fetch");

var globalOption = {
    headers: new Headers(),
    mode: "same-origin",
    credentials: "include",
    cache: "reload",
    redirect: "follow",
    referrer: "client",
    timeout: 30000
};
var setOptions = function setOptions(options) {
    globalOption = _extends({}, globalOption, options);
};

var parseJSON = function parseJSON(response) {
    try {
        return response.json();
    } catch (e) {
        throw new Error("JSON Parse Error");
    }
};

var checkStatus = function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status == 304) {
        return response;
    } else {
        throw new Error(response.statusText);
    }
};

var setGetURL = function setGetURL(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (Object.prototype.toString.call(data) !== "[object Object]" || Object.keys(data).length === 0) {
        return url;
    }

    var list = [];
    for (var key in data) {
        list.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return url + (url.indexOf("?") === -1 ? "?" : "") + list.join("&");
};

var getJSON = function getJSON(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var fetchOption = _extends({}, globalOption, { method: "GET" }, option);
    var fetchURL = setGetURL(url, data);

    return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
};

var postJSON = function postJSON(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var fetchOption = _extends({}, globalOption, { method: "POST", body: JSON.stringify(data) }, option);
    var fetchURL = url;

    return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
};

var putJSON = function putJSON(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var fetchOption = _extends({}, globalOption, { method: "PUT", body: JSON.stringify(data) }, option);
    var fetchURL = url;

    return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
};

var handleFetchPass = function handleFetchPass(data) {
    typeof globalOption.fetchSuccess === "function" && globalOption.fetchSuccess(data);

    return data;
};

var handleFetchError = function handleFetchError(error) {
    typeof globalOption.fetchError === "function" && globalOption.fetchError(error);

    throw new Error(error.message);
};

var _fetch = function _fetch(url, fetchOption) {
    return new Promise(function (resolve, reject) {
        var timer = 0;
        var myRequest = new Request(url, fetchOption);

        timer = setTimeout(function () {
            var error = new Error(url + " timeout");
            error.fetchOption = fetchOption;
            reject(error);
        }, fetchOption.timeout);

        typeof fetchOption.fetchStart === "function" && fetchOption.fetchStart();

        fetch(myRequest).then(function (response) {
            clearTimeout(timer);
            response.fetchOption = fetchOption;
            resolve(response);
        }, function (error) {
            clearTimeout(timer);
            error.fetchOption = fetchOption;
            reject(error);
        });
    }).then(checkStatus);
};
// todo
// head delete
// jsonp
// unit test
// global setup bug
// https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE

exports.default = {
    setOptions: setOptions,
    getJSON: getJSON,
    postJSON: postJSON,
    putJSON: putJSON
};
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

require("whatwg-fetch");

var defaultOption = {
    headers: new Headers(),
    mode: "same-origin",
    credentials: "include",
    cache: "reload",
    redirect: "follow",
    referrer: "client",
    timeout: 3000
};
var globalOption = {};
var options = Object.assign({}, defaultOption, globalOption);

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

    var fetchOption = Object.assign({}, options, { method: "GET" }, option);
    var fetchURL = setGetURL(url, data);

    return _fetch(fetchURL, fetchOption).then(checkStatus).then(parseJSON);
};

var postJSON = function postJSON(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var fetchOption = Object.assign({}, options, { method: "POST", body: JSON.stringify(data) }, option);
    var fetchURL = url;

    return _fetch(fetchURL, fetchOption).then(checkStatus).then(parseJSON);
};

var _fetch = function _fetch(url, fetchOption) {
    return new Promise(function (resolve, reject) {
        var timer = 0;
        var myRequest = new Request(url, fetchOption);

        timer = setTimeout(function () {
            reject(url + " timeout");
        }, fetchOption.timeout);

        typeof fetchOption.ajaxStart === "function" && fetchOption.ajaxStart();

        fetch(myRequest).then(function (response) {
            clearTimeout(timer);
            resolve(response);
        }, function (error) {
            clearTimeout(timer);
            reject(error);
        });
    }).then(function (response) {
        typeof fetchOption.ajaxSuccess === "function" && fetchOption.ajaxSuccess(response);

        return response;
    }, function (message) {
        typeof fetchOption.ajaxError === "function" && fetchOption.ajaxError(message);

        throw new Error(message);
    }).then(checkStatus);
};
// todo
// head put delete
// https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE

exports.default = {
    globalOption: globalOption,
    getJSON: getJSON,
    postJSON: postJSON
};
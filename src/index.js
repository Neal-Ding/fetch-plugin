import 'whatwg-fetch'

let defaultOption = {
    headers: new Headers(),
    mode: "same-origin",
    credentials: "include",
    cache: "reload",
    redirect: "follow",
    referrer: "client",
    timeout: 3000
}
let globalOption = {}
let options = Object.assign({}, defaultOption, globalOption)

let parseJSON = (response) => {
    try {
        return response.json()
    } catch(e) {
        throw new Error ("JSON Parse Error")
    }
}

let checkStatus = (response) => {
    if ((response.status >= 200 && response.status < 300) || response.status == 304) {
        return response
    } else {
        throw new Error(response.statusText)
    }
}

let handleFetchError = (message) => {
    throw new Error(message)
}

let setGetURL = (url, data = {}) => {
    if (Object.prototype.toString.call(data) !== "[object Object]" || Object.keys(data).length === 0) {
        return url
    }

    let list = []
    for (let key in data) {
        list.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    }
    return url + (url.indexOf("?") === -1 ? "?" : "") + list.join("&")
}

let getJSON = (url, data = {}, option = {}) => {
    let fetchOption = Object.assign({}, options, { method: "GET" }, option)
    let fetchURL = setGetURL(url, data)

    return _fetch(fetchURL, fetchOption)
        .then(checkStatus, handleFetchError)
        .then(parseJSON)
}

let postJSON = (url, data = {}, option = {}) => {
    let fetchOption = Object.assign({}, options, { method: "POST", body: JSON.stringify(data)}, option)
    let fetchURL = url

    return _fetch(url, fetchOption)
        .then(checkStatus, handleFetchError)
        .then(parseJSON)
}

let _fetch = (url, fetchOption) => {
    return new Promise ((resolve, reject)=> {
        let timer = setTimeout (() => {
            reject(`${url} timeout`)
        }, fetchOption.timeout)
        let myRequest = new Request(url, fetchOption);

        typeof fetchOption.beforeSend === "function" && fetchOption.beforeSend()

        fetch(myRequest).then((response) => {
            clearTimeout(timer)
            resolve(response)
        }, (error) => {
            clearTimeout(timer)
            reject(error)
        })
    })
}
// todo
// head put delete
// https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE

export default {
    globalOption,
    getJSON,
    postJSON
}

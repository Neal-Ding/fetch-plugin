import 'whatwg-fetch'

let globalOption = {
    headers: new Headers(),
    mode: "same-origin",
    credentials: "include",
    cache: "reload",
    redirect: "follow",
    referrer: "client",
    timeout: 30000
}
let setOptions = (options) => {
    globalOption = Object.assign({}, globalOption, options)
}

let parseJSON = (response) => {
    try {
        return response.json()
    } catch (e) {
        throw new Error("JSON Parse Error")
    }
}

let checkStatus = (response) => {
    if ((response.status >= 200 && response.status < 300) || response.status == 304) {
        return response
    } else {
        throw new Error(response.statusText)
    }
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
    let fetchOption = Object.assign({}, globalOption, { method: "GET" }, option)
    let fetchURL = setGetURL(url, data)

    return _fetch(fetchURL, fetchOption)
        .then(parseJSON).then(handleFetchPass, handleFetchError)
}

let postJSON = (url, data = {}, option = {}) => {
    let fetchOption = Object.assign({}, globalOption, { method: "POST", body: JSON.stringify(data) }, option)
    let fetchURL = url

    return _fetch(fetchURL, fetchOption)
        .then(parseJSON).then(handleFetchPass, handleFetchError)
}

let putJSON = (url, data = {}, option = {}) => {
    let fetchOption = Object.assign({}, globalOption, { method: "PUT", body: JSON.stringify(data) }, option)
    let fetchURL = url

    return _fetch(fetchURL, fetchOption)
        .then(parseJSON).then(handleFetchPass, handleFetchError)
}

let handleFetchPass = (data) => {
    typeof globalOption.fetchSuccess === "function" && globalOption.fetchSuccess(data)

    return data
}

let handleFetchError = (error) => {
    typeof globalOption.fetchError === "function" && globalOption.fetchError(error)

    throw new Error(error.message)
}

let _fetch = (url, fetchOption) => {
    return new Promise((resolve, reject) => {
        let timer = 0
        let myRequest = new Request(url, fetchOption);

        timer = setTimeout(() => {
            let error = new Error(`${url} timeout`)
            error.fetchOption = fetchOption
            reject(error)
        }, fetchOption.timeout)

        typeof fetchOption.fetchStart === "function" && fetchOption.fetchStart()

        fetch(myRequest).then((response) => {
            clearTimeout(timer)
            response.fetchOption = fetchOption
            resolve(response)
        }, (error) => {
            clearTimeout(timer)
            error.fetchOption = fetchOption
            reject(error)
        })
    })
    .then(checkStatus)
}
// todo
// head delete jsonp
// unit test
// global setup bug
// https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE

export default {
    setOptions,
    getJSON,
    postJSON,
    putJSON
}

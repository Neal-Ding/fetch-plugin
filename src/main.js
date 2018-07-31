/* istanbul ignore next */
import 'whatwg-fetch'

let globalHeaders = {
    "Content-Type": "application/json"
}

let globalOption = {
    "headers": new Headers(globalHeaders),
    "mode": "same-origin",
    "credentials": "include",
    "cache": "reload",
    "redirect": "follow",
    "referrer": "client",
    "timeout": 30000
}

let mergeOptions = (...args) => {
    let myOptions = Object.assign.apply(null, [{}].concat(args))
    let myHeaders = Object.assign({}, globalHeaders, myOptions.headers)
    let resultOptions = null

    resultOptions = Object.assign({}, globalOption, myOptions)
    resultOptions.headers = new Headers(myHeaders)

    return resultOptions
}

let setOptions = (options) => {
    globalOption = mergeOptions(options)
}

let parseJSON = (response) => {
    const maxErrorRes = 20

    return response.text().then((text) => {
        try {
            return JSON.parse(text)
        } catch (err) {
            throw new Error("JSON Parse Error: " + err + " " + response.url + " " + text.slice(0, maxErrorRes))
        }
    })
}

let checkStatus = (response) => {
    if ((response.status >= 200 && response.status < 300) || response.status == 304) {
        return response
    } else {
        throw new Error(response.url)
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
    let fetchOption = mergeOptions({ method: "GET" }, option)
    let fetchURL = setGetURL(url, data)

    return _fetch(fetchURL, fetchOption)
        .then(parseJSON).then(handleFetchPass, handleFetchError)
}

let deleteJSON = (url, data = {}, option = {}) => {
    let fetchOption = mergeOptions({ method: "DELETE" }, option)
    let fetchURL = setGetURL(url, data)

    return _fetch(fetchURL, fetchOption)
        .then(parseJSON).then(handleFetchPass, handleFetchError)
}

let postJSON = (url, data = {}, option = {}) => {
    let fetchOption = mergeOptions({ method: "POST", body: JSON.stringify(data) }, option)
    let fetchURL = url

    return _fetch(fetchURL, fetchOption)
        .then(parseJSON).then(handleFetchPass, handleFetchError)
}

let putJSON = (url, data = {}, option = {}) => {
    let fetchOption = mergeOptions({ method: "PUT", body: JSON.stringify(data) }, option)
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

    error = error instanceof Error ? error : new Error(error)
    throw error
}

let getJSONP = (url, data = {}, option = {}) => {
    let callbackValue = "jsonp" + +new Date()
    let jsonpElement = document.createElement("script")
    data[option.callbackName || "_callback"] = callbackValue
    let fetchURL = setGetURL(url, data)
    let head = document.head || document.querySelector("head") || document.documentElement

    jsonpElement.setAttribute("src", fetchURL)
    jsonpElement.setAttribute("charset", "utf-8")
    jsonpElement.setAttribute("defer", true)
    jsonpElement.setAttribute("async", true)
    head.insertBefore(jsonpElement, head.firstChild)

    return new Promise((resolve, reject) => {
        window[callbackValue] = (payload) => {
            resolve(payload)
            head.removeChild(jsonpElement)
        }

        jsonpElement.onerror = () => {
            reject()
            head.removeChild(jsonpElement)
        }

    })
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
            error.url = url
            error.fetchOption = fetchOption
            reject(error)
        })
    })
        .then(checkStatus)
}

export default {
    setOptions,
    getJSONP,
    getJSON,
    postJSON,
    putJSON,
    deleteJSON
}

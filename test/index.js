import fetch from "../dist/index.js"

fetch.getJSONP("http://jsfiddle.net/echo/jsonp/", {
}).then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})
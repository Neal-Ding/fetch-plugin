# fetch-plugin

fetch polyfill with **TIMEOUT** setting and other options, extend from whatwg-fetch

if you need other feature or got some issue, please let me know~

## Installation

via npm:

```bash
$ npm install fetch-plugin
```

## API

default Option

```json
{
    "headers": new Headers(),
    "mode": "same-origin",
    "credentials": "include",
    "cache": "reload",
    "redirect": "follow",
    "referrer": "client",
    "timeout": 3000
}
```

set global options

```js
fetch.globalOption = {
    timeout: 3000,
    fetchStart: function () {
        console.log("start")
    },
    fetchSuccess: function (response) {
        console.log("pass", response)
    },
    fetchError: function (error) {
        console.log(error.message)
    }
}
```
it will be merged, just like ajaxSetup in jQuery, and you can defined your options in every request

for get request

```js
fetch.getJSON(URL, [DATA], [OPTIONS])
```

for post request

```js
fetch.postJSON(URL, [DATA], [OPTIONS])
```

for jsonp request, options only available for callback

```js
fetch.getJSONP(URL, [DATA], [OPTIONS])
```

for Other request

todo...

## example

### normal get request

``` js
import fetch from "fetch-plugin"

fetch.getJSON("targetURL.com",{
    a: "a",
    b: "b"
}).then( function (result) {
    console.log(result)
}, function (error) {
    console.log(error)
})
```

### normal get request with status hook

``` js
import fetch from "fetch-plugin"

fetch.getJSON("targetURL.com",{
    a: "a",
    b: "b"
}, {
    timeout: 10000
}).then( function (result) {
    console.log(result)
}, function (error) {
    console.log(error)
})
```

## Manual

[fetch polyfill](https://github.com/github/fetch)

## License

MIT

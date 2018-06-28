# fetch-plugin

fetch polyfill with **TIMEOUT** setting and **JSONP**, extend from whatwg-fetch

if you need other feature or got some issue, please let me know~

[![Build Status](https://travis-ci.org/jfw10973/fetch-plugin.svg?branch=master)](https://travis-ci.org/jfw10973/fetch-plugin)

## Installation

via npm:

```bash
$ npm install fetch-plugin
```

also could load in browers directly, use "**_fetch**" as a UMD

```html
<script src="https://raw.githubusercontent.com/jfw10973/fetch-plugin/master/dist/index.js"></script>
```

## API

default Option

```json
{
    "headers": new Headers({
        "Content-Type": "application/json"
    }),
    "mode": "same-origin",
    "credentials": "include",
    "cache": "reload",
    "redirect": "follow",
    "referrer": "client",
    "timeout": 30000
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

for put request

```js
fetch.putJSON(URL, [DATA], [OPTIONS])
```

for delete request

```js
fetch.deleteJSON(URL, [DATA], [OPTIONS])
```

for jsonp request, options only available for callbackName

```js
fetch.getJSONP(URL, [DATA], [OPTIONS])
```

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

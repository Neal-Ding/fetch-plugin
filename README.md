# fetch-plugin

fetch polyfill with *TIMEOUT* setting extend from whatwg-fetch

## Installation

via npm:

```bash
$ npm install ftl2html
```

## example

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
    timeout: 3000
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

for Other request

todo...

## Manual

[fetch polyfill](https://github.com/github/fetch)

## License

MIT
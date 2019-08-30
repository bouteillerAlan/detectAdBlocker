# detectAdBlocker
a small function to detect ad blockers

## example 

```js
// whait dom is loaded and call init()
document.addEventListener('DOMContentLoaded', init, false)

function init() {
    detectAdBlocker((blocked) => {
        if (blocked) {
            // make something like call a warning modal
        } else {
            // no adblock 
        }
    })
}
```

## how it works

The function make a fetch to a specific url : ``https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js``; if the fetch is not ok an adsblocker is enabled.

For example ``uBlock Origin`` detect this url like this : 

>uBlock₀ prevented the loading of the following page:
>
>``https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js``
>
>Because of the following filter:
>
>``||googlesyndication.com^``

This filter comes from [Peter Lowe’s Ad and tracking server list](https://pgl.yoyo.org/adservers/)

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

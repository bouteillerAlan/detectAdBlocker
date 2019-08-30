function detectAdBlocker (callback) {
    const url = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    const options = {
        method: 'HEAD',
        mode: 'no-cors'
    }
    const request = new Request(url, options)
    fetch(request).then((res) => {
        return res
    }).then((response) => {
        callback(false)
    }).catch((e) => {
        callback(true)
    })
}

function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

const init = function () {
    window.addEventListener("scroll", () => {
        console.log(getScrollPercent());
    })
}

init();
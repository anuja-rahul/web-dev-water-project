let sky = document.getElementById("sky");
let mFar = document.getElementById("mountain-far");
let mMid = document.getElementById("mountain-mid");
let mClose = document.getElementById("mountain-close");
let title = document.getElementById("welcome-title");
let text = document.getElementById("welcome-text");
let btn = document.getElementById("welcome-btn");
let about = document.getElementById("header");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sky.style.top = value * 0.25 + 'px'
    mFar.style.top = value * 0.25 + 'px'
    mMid.style.top = value * 0.25 + 'px'
    mClose.style.top = value * 0.25 + 'px'
    title.style.marginRight = value * 4 + 'px'
    text.style.marginLeft = value * 4 + 'px'
    btn.style.marginBottom = value * 0.6 + 'px'
    header.style.top = value * 0.5 + 'px'
    
})
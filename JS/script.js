const bar = document.getElementById("bar");
const close = document.getElementById("close");
const shopBag = document.getElementById("shop-bag");
const nav = document.getElementById("navbar");

if(bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
        document.getElementById("bar").style = 'display: none;'
        document.getElementById("shop-bag").style = 'display: none;' 
    })
}

if(close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
        document.getElementById("bar").style = 'display: block;'
        document.getElementById("shop-bag").style = 'display: block;'
    })
}
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

// Single Product Page
let mainImage = document.getElementById("mainImg");
let smallImage = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImage.length; i++) {
    smallImage[i].addEventListener("click", () => {
        mainImage.src = smallImage[i].src;
    }) 
}
    // OR Try this
// smallImage[0].onclick = function() {
//     mainImage.src = smallImage[0].src;
// }

// smallImage[1].onclick = function() {
//     mainImage.src = smallImage[1].src;
// }

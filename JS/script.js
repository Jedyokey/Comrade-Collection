const bar = document.getElementById("bar");
const close = document.getElementById("close");
const shopBag = document.getElementById("shop-bag");
const nav = document.getElementById("navbar");

// Function to toggle the navigation menu
 const toggleNav = () => {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        bar.style.display = 'block';
        shopBag.style.display = 'block';
        close.style.display = 'none';
    } else {   
        nav.classList.add("active");
        bar.style.display = 'none';
        shopBag.style.display = 'none';
        close.style.display = 'block';
    }    
};

if (bar) {
    bar.addEventListener("click", toggleNav);
}

if (close) {
    close.addEventListener("click", toggleNav);
}

window.addEventListener("click", (event) => {
    if (event.target !== nav && event.target !== bar && !nav.contains(event.target)) {
        nav.classList.remove("active");
        bar.style.display = 'block';
        shopBag.style.display = 'block';
        close.style.display = 'none';
    }
});

// Prevent event propagation when clicking inside the nav
nav.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Single Product Page
let mainImage = document.getElementById("mainImg");
let smallImage = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImage.length; i++) {
    smallImage[i].addEventListener("click", () => {
        mainImage.src = smallImage[i].src;
    }) 
}

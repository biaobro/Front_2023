'use strict';

// Preloading
const loadElement = document.querySelector("[data-preloader]")

window.addEventListener("load", function (){
    loadElement.classList.add("loaded")
})

// Mobile Navbar Toggle
const navbar = document.querySelector("[data-navbar]")
const navToggler = document.querySelector("[data-nav-toggler]")

const toggleNavbar = function () {
    navbar.classList.toggle("active")
    navToggler.classList.toggle("active")
}

navToggler.addEventListener("click", toggleNavbar)

// Header
const header = document.querySelector("[data-header]")
const backTopBtn = document.querySelector("[data-go-top-btn]")

window.addEventListener("scroll", function (){
    // console.log(window.scrollY)
    if (window.scrollY >= 100){
        header.classList.add("active")
        backTopBtn.classList.add("active")
    } else{
        header.classList.remove("active")
        backTopBtn.classList.remove("active")
    }
})

// Scroll Reveal
const revealElements = document.querySelectorAll("[data-reveal]")

const scrollReveal = function() {
    for (let i=0, x = revealElements.length; i< x; i++){
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight/1.2){
            revealElements[i].classList.add("revealed")
        }else{
            revealElements[i].classList.remove("revealed")
        }
    }
}

window.addEventListener("scroll", scrollReveal)
window.addEventListener("load", scrollReveal)
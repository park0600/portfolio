const hamburger = document.querySelector(".togglerIcon");
const navMenu = document.querySelector(".list-group");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click"), () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navbar.classList.remove("active");
})



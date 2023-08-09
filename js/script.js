const hamburger = document.querySelector(".togglerIcon");
const navMenu = document.querySelector(".list-group");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click"), () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

})

const hover = document.querySelector(".btn");


$bgColor: white;
$textHoverColor: grey;
$debug: false;
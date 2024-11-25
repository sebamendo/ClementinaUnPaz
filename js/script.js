
document.querySelector('.botton-inicio-a').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".nav-hamburger");
    var navbar = document.querySelector(".nav-container-list");

    hamburger.addEventListener("click", function() {
        navbar.classList.toggle("list-hide");
    });
});
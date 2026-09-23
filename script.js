function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }

});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}




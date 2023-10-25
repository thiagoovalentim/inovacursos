window.addEventListener("scroll", function () {
    var container = document.querySelector(".container-time");
    var rect = container.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        container.classList.add("show-cards");
    } else {
        container.classList.remove("show-cards");
    }
});

const menubar = document.getElementById("menubar");
const links = document.querySelector(".links");

menubar.addEventListener("click",()=>
{
    links.classList.toggle("visible");

    menubar.classList.toggle("fa-bars");
    menubar.classList.toggle("fa-xmark");
})

Array.from(links.children).forEach(link => {
    link.addEventListener("click", () => {
        links.classList.remove("visible");
        menubar.classList.remove("fa-xmark");
        menubar.classList.add("fa-bars");
    });
});


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


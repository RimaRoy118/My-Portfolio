const menubar = document.getElementById("menubar");
const links = document.querySelector(".links");

menubar.addEventListener("click",()=>
{
    links.classList.toggle("visible");
})

Array.from(links.children).forEach(link => {
    link.addEventListener("click", () => {
        links.classList.remove("visible");
    });
});


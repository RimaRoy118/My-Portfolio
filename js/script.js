const menubar = document.getElementById("menubar");
const links = document.querySelector(".links");

menubar.addEventListener("click",()=>
{
    links.classList.toggle("visible");
})
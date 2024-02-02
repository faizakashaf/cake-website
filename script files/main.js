/*--------- Show Menu------ */

const menu = document.querySelector(".nav_menu");
const toggle = document.querySelector(".nav_toggle");
const close = document.querySelector(".nav_close");

/* ---menu display --- */
if(toggle){
    toggle.addEventListener("click",()=>{
        menu.classList.add("show_menu");
    })
}
/* ----- hide menu ---- */
if(close){
close.addEventListener("click",() => {
    menu.classList.remove("show_menu");
})
}
/* ----- Remove menu Mobile ---- */
const links = document.querySelectorAll(".item");

links.forEach (link => {
    link.addEventListener("click",() => {
        menu.classList.remove("show_menu"); 

    })
})

/* ----- Blur Header on Scrolling  ---- */
const blurHeader  = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("blur_header")
                       : header.classList.remove("blur_header")
}
window.addEventListener("scroll",blurHeader)
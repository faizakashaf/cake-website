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

/* ----- Show Scroll up   ---- */
const showScroll  = () => {
    const scrollUp = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollUp.classList.add("show_scroll")
                       : scrollUp.classList.remove("show_scroll")
}
window.addEventListener("scroll",showScroll)

/* ----- Scroll Link Active  ----- */

const sectionsWithId = document.querySelectorAll("section[id]");

const scrollLinkActive = () => {
    const scrollDown = window.scrollY
    sectionsWithId.forEach(current => {
    const sectionHeight = current.offsetHeight,
    
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),          
         sectionClass = document.querySelector('.nav_menu a[href="#' + sectionId + '"]')

    if(scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight ){
        sectionClass.classList.add("active-link");
        sectionClass.classList.remove("item");
    }
    else{
        sectionClass.classList.remove("active-link");
        sectionClass.classList.add("item");
       }
    });
};
window.addEventListener('scroll', scrollLinkActive)

// ======= Scroll Reveal Animation ===== //

const sr = ScrollReveal({
        origin : 'top',
        distance : '40px',
        opacity : 1,
        scale : 1.1,
        duration : 2500,
        delay : 300,
        //  reset : true
    })
sr.reveal('.home_data, .about-img2, .about_data, .about-data, .visit_data')
sr.reveal('.top_picks_card .top_img',{interval: 100,rotate:{z:10},distance:0})
sr.reveal('.footer_container',{scale:1})
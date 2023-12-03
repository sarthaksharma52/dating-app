var tl = gsap.timeline()
tl.from("#logo", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.2
})
tl.from(".nav_main", {
    x: 100,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2
})
tl.from("#content1_1 h1, #content1_1 p", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5
})
tl.from("#img_content1", {
    x: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.5
})
tl.from(".btn_content1", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.5
})

var img1 = document.querySelector(".card_img");
var img = document.querySelector(".card_img img");
var change_card_h2 = document.querySelector(".card .name");
img1.addEventListener("mouseenter", function () {
    img.style.zIndex = "-1";
    change_card_h2.innerHTML = "&nbsp"
    gsap.from(".data", {
        y: 200
    })
})
img1.addEventListener("mouseleave", function () {
    img.style.zIndex = "1";
    change_card_h2.innerHTML = "Roadablock"

})


// making ham burger menu/navbar

var open_nav = document.querySelector('.close_nav');
var main_nav = document.querySelector('.nav_main');
var logo = document.querySelector('#logo');

var no = 0;
open_nav.addEventListener('click',show);

function show(){
        if(no==0){
            // console.log("hello")
            main_nav.style.display= "flex";
            logo.style.display= "none";
            no = 1;
        }
        else{
            main_nav.style.display= "none";
            // mainMenu.style.top = '-100%';
            logo.style.display= "flex";
            no = 0;
        }
}


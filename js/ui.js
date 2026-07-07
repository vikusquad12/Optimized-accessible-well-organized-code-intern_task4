// ui.js
// UI related features

// =======================
// Mobile Navbar Toggle
// =======================

export function initNavbar(){
    const navul = document.getElementById("nav-ul");
    const toggle = document.getElementById("toggle");
    const ctoggle = document.getElementById("ctoggle");

    if(!toggle || !ctoggle) return;


    toggle.addEventListener("click",()=>{

        navul.style.display="flex";
        toggle.style.display="none";
        ctoggle.style.display="flex";
    });

    ctoggle.addEventListener("click",()=>{
        navul.style.display="none";
        toggle.style.display="flex";
        ctoggle.style.display="none";
    });
}


// =======================
// Dark Mode
// =======================

export function initDarkMode(){

    const themeToggle =document.getElementById("themetoggle");
    if(!themeToggle) return;
    const savedTheme =localStorage.getItem("theme");

    if(savedTheme==="dark"){
        document.body.classList.add("dark");
        themeToggle.textContent="☀️ Light";
    }

    themeToggle.addEventListener("click",()=>{
        document.body.classList.toggle("dark");
        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

            themeToggle.textContent="☀️ Light";

        }
        else{
            localStorage.setItem("theme","light");
            themeToggle.textContent="🌙 Dark";
        }
    });
}


// =======================
// Modal Popup
// =======================

export function initModal(){

    const modal=document.getElementById("modal");
    const openBtn=document.getElementById("openModal");
    const closeBtn=document.getElementById("closeModal");

    if(!modal || !openBtn || !closeBtn) return;

    openBtn.addEventListener("click",()=>{
        modal.style.display="flex";
    });

    closeBtn.addEventListener("click",()=>{
        modal.style.display="none";
    });

    window.addEventListener("click",(event)=>{
        if(event.target===modal){
            modal.style.display="none";
        }
    });
}


// =======================
// Image Slider
// =======================

export function initSlider(){

    const slide=document.getElementById("slide");
    if(!slide) return;

    const images=[
        "https://plus.unsplash.com/premium_photo-1706548911842-7162d4bd2c98?w=600",
        "https://images.unsplash.com/photo-1565799515768-2dcfd834625c?w=600",
        "https://images.unsplash.com/photo-1604762456923-7a61445a1052?w=600",
        "https://images.unsplash.com/photo-1563292769-4e05b684851a?w=600"
    ];

    let currentIndex=0;
    function showImage(){
        slide.src=images[currentIndex];
    }

    document.getElementById("next")
    .addEventListener("click",()=>{
        currentIndex++;

        if(currentIndex>=images.length){
            currentIndex=0;
        }
        showImage();

    });

    document.getElementById("prev")
    .addEventListener("click",()=>{
        currentIndex--;

        if(currentIndex<0){
            currentIndex=images.length-1;
        }
        showImage();
    });

    setInterval(()=>{
        currentIndex++;

        if(currentIndex>=images.length){
            currentIndex=0;
        }

        showImage();
    },3000);

}
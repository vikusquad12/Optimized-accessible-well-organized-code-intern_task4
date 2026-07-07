// utils.js
// Utility functions


// =======================
// Back To Top
// =======================

export function initBackToTop(){

    const btn= document.getElementById("btotop");
    if(!btn) return;

    btn.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });

}


// =======================
// Animated Counters
// =======================


export function initCounters(){
    const counters= document.querySelectorAll(".counter");

    if(counters.length===0) return;
        const speed=2000;
        counters.forEach(counter=>{

            function updateCount(){
                const target= Number(counter.dataset.target);
                const count= Number(counter.innerText);
                const increment= target/speed;

                if(count < target){
                    counter.innerText=
                        Math.ceil(count+increment);
                        setTimeout(updateCount,1);
                } else{
                    counter.innerText=target;
                }
            }

            updateCount();
        });

}
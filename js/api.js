// api.js
// Weather API functionality

const API_KEY ="075ec3a94b4b1b5da62d9fd6dd38bbe3";
export function initWeather(){
    const form =document.querySelector("#w-form");
    const search =document.querySelector("#w-search");
    const info =document.querySelector("#w-info");

    if(!form || !search || !info) return;

    async function getWeather(city){

        try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response=await fetch(url);
        const data=await response.json();
        if(data.cod==="404"){

            alert("City not found");
            return;

        }

        info.innerHTML=`
            <div class="w-img">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
            </div>

            <div class="w-content">
                <h2>${data.main.temp} °C</h2>
                <h4>
                ${data.weather[0].main}
                ${data.wind.speed} km/h
                </h4>
                <h3>${data.name}</h3>
            </div>
        `;

        } catch(error){
            console.error("Weather error:",error);
        }

        }

    form.addEventListener("submit",(event)=>{
        event.preventDefault();

        const city=search.value.trim();

        if(city==="") return;

        localStorage.setItem("lastCity",city);
        getWeather(city);
        });


    const lastCity=localStorage.getItem("lastCity");

    if(lastCity){
        search.value=lastCity;
    }

}
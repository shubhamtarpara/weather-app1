// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}
const weatherApi = {
    key: "f124b94422ce30d02c1132f8f0ac2f38",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById("input-box")

searchInputBox.addEventListener("change", () => {
    
    // if (event.keyCode == 13) {
        console.log(searchInputBox.value)
        weatherReport(searchInputBox.value);
    // }
});

function weatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}

function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText =`${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;c`;   

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);




    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('image/clear1.jpg')";
        document.getElementById("image").src="image/clear.png"

    } else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('image/cloud.jpg')";
        document.getElementById("image").src="image/cloud.png"
        
    } else if(weatherType.textContent == 'Smoke'){
        document.body.style.backgroundImage = "url('image/smoke.jpg')";
        document.getElementById("image").src="image/smoke.png"

    }else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('image/snow.jpg')";
        document.getElementById("image").src="image/snow.png"

    }else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('image/raining.jpg')";
        document.getElementById("image").src="image/rain.png"
        
    }else if(weatherType.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "url('image/lighting1.jpg')";
        document.getElementById("image").src="image/lightning.png"

    }else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('image/haze1.jpg')";
        document.getElementById("image").src="image/haze.png"
    }

}

function dateManage(datetype){
    let days = [ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year = datetype.getFullYear();
    let month = months[datetype.getMonth()];
    let date = datetype.getDate();
    let day = days[datetype.getDay()];

    return `${date} ${month} (${day}), ${year}`;

}

window.onload = () =>{
    weatherReport("Ahmedabad");
};
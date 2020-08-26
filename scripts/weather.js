function geoFindMe() {
    let urlWeather = ''; 

    function success(pos) {
        var crd = pos.coords;
        let lat = crd.latitude.toFixed(2);
        let lon = crd.longitude.toFixed(2);
        urlWeather = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ua&appid=47065cb9ab1a711c668427875a0d6e0e`
        loadWeather(urlWeather);
    };
      
    function error(err){
        console.warn(`ERROR(${err.code}): ${err.message}`);
        urlWeather = 'http://api.openweathermap.org/data/2.5/weather?q=Rivne&lang=ua&appid=47065cb9ab1a711c668427875a0d6e0e';
        loadWeather(urlWeather);
    };
    
    navigator.geolocation.getCurrentPosition(success, error);
}

class ShowWeatherInfo{
    constructor(name,data,icon = '',out = 'weatherBlock'){
        this.name = name;
        this.data = data;
        this.icon = icon;
        this.out = out;
    }
    addWithoutIcon(){
        let span = document.createElement('span');
        span.setAttribute('name',`${this.name}`);
        span.textContent = this.data;
        document.querySelector(`.${this.out}`).insertAdjacentElement('afterbegin',span);
        return this;
    }
    addWithIcon(){
        let span = document.createElement('span');
        span.setAttribute('name',this.name);
        span.innerHTML = ` <i class ="weather-icon ${this.icon}"></i> ` +  this.data;
        document.querySelector(`.${this.out}`).insertAdjacentElement('beforeend',span);
        return this;
    }
}

function loadWeather(url) {
    fetch(url).then(response => {
        return response.json();
    }).then(data=>{

        let location = new ShowWeatherInfo(`location`,data.name,"fas fa-map-marker-alt").addWithIcon();
        let weather = new ShowWeatherInfo(`weather`,`Погода: ${data.weather[0].description}`,"fas fa-cloud").addWithIcon();
        let tempCurr = new ShowWeatherInfo(`tempCurr`,`Температура: ${Math.ceil(data.main.temp - 273.15)}°C`,"fas fa-thermometer-three-quarters").addWithIcon();
        let tempFL = new ShowWeatherInfo(`tempFL`,`Відчувається як: ${Math.ceil(data.main.feels_like - 273.15)}°C`,"fas fa-thermometer").addWithIcon();
        let tempMin = new ShowWeatherInfo(`tempMin`,`Мінімальна температура: ${Math.ceil(data.main.temp_min - 273.15)}°C`,"fas fa-thermometer-empty").addWithIcon();
        let tempMax = new ShowWeatherInfo(`tempMax`,`Максимальна температура: ${Math.ceil(data.main.temp_max - 273.15)}°C`,"fas fa-thermometer-full").addWithIcon();
        let humidity = new ShowWeatherInfo(`humidity`,`Вологість повітря: ${data.main.humidity}%`,"fas fa-tint").addWithIcon();
        let pressure = new ShowWeatherInfo(`pressure`,`Атмосферний тиск: ${(data.main.pressure/1000*0.75).toFixed(2)} мм рт.ст.`,"fas fa-sort-amount-up-alt").addWithIcon();
        let sunRise = new ShowWeatherInfo(`sunRise`,`Схід сонця: ${new Date(data.sys.sunrise).toLocaleTimeString()}`,"far fa-sun").addWithIcon();
        let sunSet = new ShowWeatherInfo(`sunSet`,`Захід сонця: ${new Date(data.sys.sunset).toLocaleTimeString()}`,"fas fa-sun").addWithIcon();
        let visibility = new ShowWeatherInfo(`visibility`,(isNaN(data.visibility))?`Видимість: погіршена`:`Видимість: ${data.visibility / 1000 + ' км'}`,`fas fa-${(isNaN(data.visibility))?"low-vision":"eye"}`).addWithIcon();
        let windSpeed = new ShowWeatherInfo(`windSpeed`,`Швидкість вітру: ${data.wind.speed}м/с`,"fas fa-wind").addWithIcon();
        let direction;
        if(data.wind.deg<22.5 || data.wind.deg>=337.5) direction = 'Пн' 
        else if(data.wind.deg>=22.5 && data.wind.deg<67.5) direction = 'ПнCx'
        else if(data.wind.deg>=67.5 && data.wind.deg<112.5) direction = 'Cx'
        else if(data.wind.deg>=112.5 && data.wind.deg<157.5) direction = 'ПдCx'
        else if(data.wind.deg>=157.5 && data.wind.deg<202.5) direction = 'Пд'
        else if(data.wind.deg>=202.5 && data.wind.deg<247.5) direction = 'ПдЗx'
        else if(data.wind.deg>=247.5 && data.wind.deg<292.5) direction = 'Зx'
        else if(data.wind.deg>=292.5 && data.wind.deg<337.5) direction = 'ПнЗx'
        let windDir = new ShowWeatherInfo(`windDir`,`Напрямок вітру: ${direction} (${data.wind.deg}°)`,"far fa-compass").addWithIcon();
        let img = document.createElement('img');
        img.setAttribute('src',`./img/weather/${data.weather[0].icon}.gif`);
        weatherBlock.insertAdjacentElement('beforeend',img);
    }) 
    .catch(err => {
        console.log(err);
    });

}

window.addEventListener('load',()=>{
    geoFindMe() 

})

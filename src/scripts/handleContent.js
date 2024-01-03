import { getForecastData } from "./forecastApi";
import { getWeatherData } from "./handleApi";

const handleContent = function () {
    const content = document.getElementById('content');
    const userInput = document.getElementById('userInput');

    const locationName = document.createElement('h1');
    locationName.textContent = "LOS ANGELES"
    locationName.setAttribute('id', 'locationName');

    const forecast = document.createElement('div');
    forecast.setAttribute('id', 'forecast');

    const today = document.createElement('div');
    today.setAttribute('id', 'today');

    const currentWeather = document.createElement('div');
    currentWeather.setAttribute('id', 'current');

    const currentIcon = new Image();
    currentIcon.setAttribute('id', 'currentIcon');

    const feelsLike = document.createElement('div');
    feelsLike.setAttribute('id', 'feelsLike');

    const precip = document.createElement('div');
    precip.setAttribute('id', 'precip');

    const humidity = document.createElement('div');
    humidity.setAttribute('id', 'humid');

    const wind = document.createElement('div');
    wind.setAttribute('id', 'wind');

    today.appendChild(currentIcon);
    today.appendChild(currentWeather)
    today.appendChild(feelsLike);
    today.appendChild(precip);
    today.appendChild(humidity);
    today.appendChild(wind);

    const day1Date = document.createElement('div');
    day1Date.classList.add('dates');
    day1Date.setAttribute('id', 'day1Date');

    const day1Icon = new Image();
    day1Icon.classList.add("forecastIcons");
    day1Icon.setAttribute('id', 'day1Icon');

    const day1Temp = document.createElement('div');
    day1Temp.setAttribute('id', 'day1Temp');

    const day1 = document.createElement('div');
    day1.classList.add('weatherCell');
    day1.setAttribute('id', 'day1');

    day1.appendChild(day1Date);
    day1.appendChild(day1Icon);
    day1.appendChild(day1Temp);

    const day2Date = document.createElement('div');
    day2Date.classList.add('dates');
    day2Date.setAttribute('id', 'day2Date');

    const day2Icon = new Image();
    day2Icon.classList.add("forecastIcons");
    day2Icon.setAttribute('id', 'day2Icon');

    const day2Temp = document.createElement('div');
    day2Temp.setAttribute('id', 'day2Temp');

    const day2 = document.createElement('div');
    day2.classList.add('weatherCell');
    day2.setAttribute('id', 'day2');

    day2.appendChild(day2Date);
    day2.appendChild(day2Icon);
    day2.appendChild(day2Temp);

    const day3Date = document.createElement('div');
    day3Date.classList.add('dates');
    day3Date.setAttribute('id', 'day3Date');

    const day3Icon = new Image();
    day3Icon.classList.add("forecastIcons");
    day3Icon.setAttribute('id', 'day3Icon');

    const day3Temp = document.createElement('div');
    day3Temp.setAttribute('id', 'day3Temp');

    const day3 = document.createElement('div');
    day3.classList.add('weatherCell');
    day3.setAttribute('id', 'day3');

    day3.appendChild(day3Date);
    day3.appendChild(day3Icon);
    day3.appendChild(day3Temp);

    content.appendChild(locationName);
    content.appendChild(today);
    content.appendChild(forecast);
    forecast.appendChild(day1);
    forecast.appendChild(day2);
    forecast.appendChild(day3);

    userInput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            locationName.textContent = userInput.value.toUpperCase();
            getWeatherData();
            getForecastData();
        }
    });
};

export { handleContent };
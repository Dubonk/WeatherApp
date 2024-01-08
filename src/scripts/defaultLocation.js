const getLaWeather = async function () {
    const userInput = "los angeles";
    const currentIcon = document.getElementById('currentIcon');
    const currentWeather = document.getElementById('current');
    const feelsLike = document.getElementById('feelsLike');
    const precip = document.getElementById('precip');
    const humidity = document.getElementById('humid');
    const wind = document.getElementById('wind');
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=feb7b7bfa5f543b49ee173908232912&q=${userInput}`);
        const weatherData = await response.json();
        currentIcon.src = `https:${weatherData.current.condition.icon}`;
        currentWeather.textContent = `${weatherData.current.temp_f}°F`;
        feelsLike.textContent = `Feels like ${weatherData.current.feelslike_f}°F`;
        precip.textContent = `Precipitation: ${weatherData.current.precip_in}%`;
        humidity.textContent = `Humidity: ${weatherData.current.humidity}%`;
        wind.textContent = `Wind: ${weatherData.current.wind_mph}mph`; 
    } catch (error) {
        console.log(error);
    }
    const day1Date = document.getElementById('day1Date');
    const day1Icon = document.getElementById('day1Icon');
    const day1Temp = document.getElementById('day1Temp');
    const day2Date = document.getElementById('day2Date');
    const day2Icon = document.getElementById('day2Icon');
    const day2Temp = document.getElementById('day2Temp');
    const day3Date = document.getElementById('day3Date');
    const day3Icon = document.getElementById('day3Icon');
    const day3Temp = document.getElementById('day3Temp');
    try{
        const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=feb7b7bfa5f543b49ee173908232912&q=${userInput}&days=5`);
        const forecastData = await forecastResponse.json();
        const dateString1 = forecastData.forecast.forecastday[2].date;
        const dateString2 = forecastData.forecast.forecastday[3].date;
        const dateString3 = forecastData.forecast.forecastday[4].date;
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);
        const date3 = new Date(dateString3);
        const options = { weekday: 'long' };
        const dayName1 = new Intl.DateTimeFormat('en-US', options).format(date1); 
        const dayName2 = new Intl.DateTimeFormat('en-US', options).format(date2);
        const dayName3 = new Intl.DateTimeFormat('en-US', options).format(date3);

        currentLow.textContent = `Low: ${forecastData.forecast.forecastday[0].day.mintemp_f}°F`;
        day1Date.textContent = dayName1;
        day1Icon.src = `https:${forecastData.forecast.forecastday[1].day.condition.icon}`;
        day1Temp.innerHTML = `High: ${forecastData.forecast.forecastday[1].day.avgtemp_f}°F <br>Low: ${forecastData.forecast.forecastday[1].day.mintemp_f}°F`;

        day2Date.textContent = dayName2;
        day2Icon.src = `https:${forecastData.forecast.forecastday[2].day.condition.icon}`;
        day2Temp.innerHTML = `High: ${forecastData.forecast.forecastday[2].day.avgtemp_f}°F <br>Low: ${forecastData.forecast.forecastday[2].day.mintemp_f}°F`;

        day3Date.textContent = dayName3;
        day3Icon.src = `https:${forecastData.forecast.forecastday[3].day.condition.icon}`;
        day3Temp.innerHTML = `High: ${forecastData.forecast.forecastday[3].day.avgtemp_f}°F <br>Low: ${forecastData.forecast.forecastday[3].day.mintemp_f}°F`;
    } catch (error) {
        console.log(error);
    }
};


export { getLaWeather };
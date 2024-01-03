const getWeatherData = async function () {
    const userInput = document.getElementById('userInput');
    const currentIcon = document.getElementById('currentIcon');
    const currentWeather = document.getElementById('current');
    const feelsLike = document.getElementById('feelsLike');
    const precip = document.getElementById('precip');
    const humidity = document.getElementById('humid');
    const wind = document.getElementById('wind');
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=feb7b7bfa5f543b49ee173908232912&q=${userInput.value}`);
        const weatherData = await response.json();
        currentIcon.src = `https:${weatherData.current.condition.icon}`;
        currentWeather.textContent = `${weatherData.current.temp_f}°F`;
        feelsLike.textContent = `Feels like ${weatherData.current.feelslike_f}°F`;
        precip.textContent = `Precipitation: ${weatherData.current.precip_in}%`;
        humidity.textContent = `Humidity: ${weatherData.current.humidity}%`;
        wind.textContent = `Wind: ${weatherData.current.wind_mph}mph`;
        // console.log(weatherData); 
    } catch (error) {
        console.log(error);
    }
};

export { getWeatherData };
const handleContent = function () {
    const content = document.getElementById('content');
    const userInput = document.getElementById('userInput');

    const locationName = document.createElement('h1');
    locationName.setAttribute('id', 'locationName');

    const forecast = document.createElement('div');
    forecast.setAttribute('id', 'forecast');

    const currentWeather = document.createElement('div');
    // currentWeather.classList.add('weatherCell');
    currentWeather.setAttribute('id', 'current');

    const day1 = document.createElement('div');
    day1.classList.add('weatherCell');
    day1.setAttribute('id', 'day1');

    const day2 = document.createElement('div');
    day2.classList.add('weatherCell');
    day2.setAttribute('id', 'day2');

    const day3 = document.createElement('div');
    day3.classList.add('weatherCell');
    day3.setAttribute('id', 'day3');

    content.appendChild(locationName);
    content.appendChild(currentWeather);
    content.appendChild(forecast);
    forecast.appendChild(day1);
    forecast.appendChild(day2);
    forecast.appendChild(day3);

    userInput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            locationName.textContent = userInput.value.toUpperCase();
            getWeatherData();
        }
    });

    async function getWeatherData() {
        try{
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=feb7b7bfa5f543b49ee173908232912&q=${userInput.value}`);
            const weatherData = await response.json();
            console.log(weatherData);
            console.log(weatherData.current.feelslike_f)
            console.log(weatherData.current.condition.text);
        } catch (error) {
            console.log(error);
        }
    };
};

export { handleContent };
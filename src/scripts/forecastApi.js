const getForecastData = async function () {
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
        const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=feb7b7bfa5f543b49ee173908232912&q=${userInput.value}&days=5`);
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
        day1Date.textContent = dayName1;
        day1Icon.src = `https:${forecastData.forecast.forecastday[1].day.condition.icon}`;
        day1Temp.textContent = `${forecastData.forecast.forecastday[1].day.avgtemp_f}°F`;

        day2Date.textContent = dayName2;
        day2Icon.src = `https:${forecastData.forecast.forecastday[2].day.condition.icon}`;
        day2Temp.textContent = `${forecastData.forecast.forecastday[2].day.avgtemp_f}°F`;

        day3Date.textContent = dayName3;
        day3Icon.src = `https:${forecastData.forecast.forecastday[3].day.condition.icon}`;
        day3Temp.textContent = `${forecastData.forecast.forecastday[3].day.avgtemp_f}°F`;
        
        console.log(forecastData);
    } catch (error) {
        console.log(error);
    }
};

export { getForecastData };
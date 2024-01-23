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
        const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=feb7b7bfa5f543b49ee173908232912&q=${userInput.value}&days=3`);
        const forecastData = await forecastResponse.json();
        // const dateString1 = forecastData.forecast.forecastday[0].date;
        // const dateString2 = forecastData.forecast.forecastday[1].date;
        // const dateString3 = forecastData.forecast.forecastday[2].date;
        // const date1 = new Date(dateString1 + 'PST');
        // const date2 = new Date(dateString2 + 'PST');
        // const date3 = new Date(dateString3 + 'PST');
        const date1 = new Date(forecastData.forecast.forecastday[0].date);
        const date2 = new Date(forecastData.forecast.forecastday[1].date);
        const date3 = new Date(forecastData.forecast.forecastday[2].date);

        const options = { weekday: 'long'};
        const dayName1 = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'UTC' }).format(date1); 
        const dayName2 = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'UTC' }).format(date2);
        const dayName3 = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'UTC' }).format(date3);
        console.log(forecastData);
        console.log(dayName1);

        currentLow.textContent = `Low: ${forecastData.forecast.forecastday[0].day.mintemp_f}°F`;

        day1Date.textContent = dayName1.substring(0, 3);
        day1Icon.src = `https:${forecastData.forecast.forecastday[0].day.condition.icon}`;
        day1Temp.innerHTML = `High: ${forecastData.forecast.forecastday[0].day.avgtemp_f}°F <br>Low: ${forecastData.forecast.forecastday[0].day.mintemp_f}°F`;

        day2Date.textContent = dayName2.substring(0, 3);
        day2Icon.src = `https:${forecastData.forecast.forecastday[1].day.condition.icon}`;
        day2Temp.innerHTML = `High: ${forecastData.forecast.forecastday[1].day.avgtemp_f}°F <br>Low: ${forecastData.forecast.forecastday[1].day.mintemp_f}°F`;

        day3Date.textContent = dayName3.substring(0, 3);
        day3Icon.src = `https:${forecastData.forecast.forecastday[2].day.condition.icon}`;
        day3Temp.innerHTML = `High: ${forecastData.forecast.forecastday[2].day.avgtemp_f}°F <br>Low: ${forecastData.forecast.forecastday[2].day.mintemp_f}°F`;
    } catch (error) {
        console.log(error);
    }
};

export { getForecastData };
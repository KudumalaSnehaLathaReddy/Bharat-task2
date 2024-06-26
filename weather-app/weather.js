// Function to fetch weather data from OpenWeatherMap API
async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap
    const city = document.getElementById('city-input').value;
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching data: ', error);
        alert('Failed to fetch weather data. Please check your city name and try again.');
    }
}

// Function to display weather data
function displayWeather(data) {
    document.getElementById('city').textContent = data.name;
    document.getElementById('temperature').textContent = data.main.temp;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('wind-speed').textContent = data.wind.speed;
}
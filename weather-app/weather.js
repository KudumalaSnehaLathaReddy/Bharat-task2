// Function to fetch weather data from OpenWeatherMap API
async function getWeather() {
    const apiKey = 'cebbbaf84df241ebbfa111453241506'; // Replace with your API key from OpenWeatherMap
    const city = document.getElementById('city-input').value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=cebbbaf84df241ebbfa111453241506 &q=India}`;

    try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=cebbbaf84df241ebbfa111453241506 &q=India');
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

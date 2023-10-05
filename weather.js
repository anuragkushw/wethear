// Get user's location and fetch weather data from OpenWeatherMap API
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
            const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('city').textContent = data.name;
                    document.getElementById('weather').textContent = data.weather[0].description;
                    document.getElementById('temp').textContent = data.main.temp.toFixed(1);
                })
                .catch(error => console.error('Error fetching data: ', error));
        });
    } else {
        console.error('Geolocation is not supported by your browser.');
    }
});

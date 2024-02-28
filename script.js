function getWeather() {
    const locationInput = document.getElementById('location-input');
    const weatherInfo = document.getElementById('weather-info');
  
    const apiKey = '92d26d1f53485820a323af43f71da1b1'; 
    const location = locationInput.value;
  
    if (!location) {
      alert('Please enter a location.');
      return;
    }
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404') {
          alert('Location not found. Please enter a valid location.');
        } else {
          const weatherDescription = data.weather[0].description;
          const temperature = data.main.temp;
          const cityName = data.name;
  
          const weatherText = `Current weather in ${cityName}: ${weatherDescription}. Temperature: ${temperature}°C`;
  
          weatherInfo.textContent = weatherText;
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data.');
      });
  }
  
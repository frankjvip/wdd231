const apiKey = "7f2ae593df12116d6a3fe0760fb3c52e";
const city = "Santa Lucia,HN";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("current-weather").innerHTML = `
      <p>Temperature: ${data.main.temp} °C</p>
      <p>${data.weather[0].description}</p>
    `;
  } catch (error) {
    console.error(error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecastUrl);
    const data = await response.json();
    let forecastHTML = "<h3>3 days forecast</h3>";
    for (let i = 0; i < 3; i++) {
      const day = data.list[i * 8]; 
      forecastHTML += `<p>${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp} °C</p>`;
    }
    document.getElementById("forecast").innerHTML = forecastHTML;
  } catch (error) {
    console.error(error);
  }
}

getWeather();
getForecast();

const btn = document.getElementById("btn");
const result = document.getElementById("result");
const city = document.querySelector("#city");
btn.addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value;
  const key = "01904dfdcfc5484691f52620260502";

  if (!city) return;

  result.innerHTML = "Loading...";

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`,
    );

    const data = await res.json();

    if (data.error) {
      result.innerHTML = "City not found ❌";
      return;
    }

    result.innerHTML = `
    <div class="city">
      <h2>${data.location.name}, ${data.location.country}</h2>
      <img src="https:${data.current.condition.icon}" />
    </div>
    <div class="others">    
      <p>🌡 Temp: ${data.current.temp_c}°C</p>
      <p>☁ Condition: ${data.current.condition.text}</p>
      <p>💧 Humidity: ${data.current.humidity}%</p>
      <p>🌬 Wind: ${data.current.wind_kph} kph</p>
      <p>🌫 AQI: ${data.current.air_quality.pm2_5.toFixed(1)}</p>
    </div>
    `;
  } catch (err) {
    result.innerHTML = "Error fetching data";
  }
}

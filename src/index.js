import {getDataWeatherByCity, getDataWeatherByLatLon} from './js/api/requests'
import './style.css';

const weatherInfo = document.querySelector('.weather-info');
const input = document.querySelector('.input-search')

const iniInformationWeather = () => {
	async function success(position) {
		const dataWeather = await getDataWeatherByLatLon(position.coords);
		createInformationWeather(dataWeather);
	};
	
	navigator.geolocation.getCurrentPosition(success);
}

const createInformationWeather = (weather) => {
	const html = `
		<div class="city-country">
			<span class="city">${weather.city}</span>
			<span class="country">${weather.country}</span>
		</div>
		<div class="temperature-info">
			<span class="temperature">${weather.temperature}°C</span>
		</div>
		
		<div class="squares-info">
		<div class="square humidity">
			<span><strong>Humidity</strong></span>
			<img src="./src/images/humidity.png" alt="humidity percent">
			<span><strong>${weather.humidity} %</strong></span>
			</div>	
			<div class="square weather">
				<img src=\"./images/${weather.icon}.png\">
				<span><strong>${weather.description}</strong></span>
			</div>
		<div class="square wind">
			<span><strong>Wind Speed</strong></span>
			<img src="./src/images/wind.png" alt="wind speed">
			<span><strong>${weather.speedWind} Km/h</strong></span>
		</div>
		</div>

		
		`
		// 	<div class="humidity">
		// 		<img src="./src/images/humidity.png" alt="humidity percent">
		// 		<p><strong>${weather.humidity} %</strong></p>
		// 	</div>
		// 	<div class="wind">
		// 		<img src="./src/images/wind.png" alt="wind speed">
		// 		<p><strong>${weather.speedWind} km/h</strong></p>
		// 	</div>
		//`

	// const html = `
	// 	<div class="city-country">
	// 		<h3>${weather.country}</h3>
	// 		<h2>${weather.city}</h2>
	// 	</div>
	// 	<div class="temp-icon-desc">
	// 		<div class="temp-icon">
	// 			<span class="temperature">${weather.temperature}</span>
	// 		</div>
	// 		<div class="weather">
	// 			<img src=\"./images/${weather.icon}.png\">
	// 			<h3>${weather.description}</h3>
	// 	</div>
	// 		<div class="humidity">
	// 			<img src="./src/images/humidity.png" alt="humidity percent">
	// 			<p><strong>${weather.humidity} %</strong></p>
	// 		</div>
	// 		<div class="wind">
	// 			<img src="./src/images/wind.png" alt="wind speed">
	// 			<p><strong>${weather.speedWind} km/h</strong></p>
	// 		</div>
	// 	`

	weatherInfo.innerHTML = html;
}

input.addEventListener("keyup", async (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
		const [city, country] = input.value.split(',')
		const dataWeather = await getDataWeatherByCity(city, country);
		createInformationWeather(dataWeather);
		input.value = '';
  }
});

iniInformationWeather()

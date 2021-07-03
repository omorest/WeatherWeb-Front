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
			<h3>${weather.country}</h3>
			<h2>${weather.city}</h2>
		</div>
		<div class="temp-icon-desc">
			<div class="temp-icon">
				<span class="temperature">${weather.temperature}</span>
				<img src="./images/temperature.png">
			</div>
			<div class="weather">
				<img src=\"./images/${weather.icon}.png\">
			</div>
			<div class="description">
				<h3>${weather.description}</h3>
			</div>
		</div>
		<div class="extra-info">
			<div class="humidity">
				<img src="./src/images/humidity.png" alt="humidity percent">
				<p><strong>${weather.humidity} %</strong></p>
			</div>
			<div class="wind">
				<img src="./src/images/wind.png" alt="wind speed">
				<p><strong>${weather.speedWind} km/h</strong></p>
			</div>
		</div>
		`

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

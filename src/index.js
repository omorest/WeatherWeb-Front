import {getDataWeatherByLatLon} from './api/requests'
import './style.css';

const weatherInfo = document.querySelector('.weather-info')

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
	<div class="extra-info"></div>
	`

	weatherInfo.innerHTML = html;
}

iniInformationWeather()

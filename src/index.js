import {getDataWeatherByLatLon} from './api/requests'
import './style.css';

const cityCountry = document.querySelector('.city-country')
const tempIcon = document.querySelector('.temp-icon')
const weatherIconContainer = document.querySelector('.weather')
const descriptionWeather = document.querySelector('.description')

const iniInformationWeather = () => {
	async function success(position) {
		const dataWeather = await getDataWeatherByLatLon(position.coords);
		createInformationWeather(dataWeather);
	};
	
	navigator.geolocation.getCurrentPosition(success);
}

const createInformationWeather = (weather) => {
	let city = document.createElement('h2');
	let country = document.createElement('h3');
	let temperature = document.createElement('span');
	let iconTemperature = document.createElement('img')
	let icon = document.createElement('img')
	let description = document.createElement('h3')
	
	temperature.classList.add('temperature')
	city.innerHTML = weather.city;
	country.innerHTML = weather.country;
	cityCountry.append(country, city);
	
	temperature.innerHTML = weather.temperature;
	iconTemperature.src = './images/temperature.png';
	tempIcon.append(temperature, iconTemperature);

	icon.src = './images/' + weather.icon + '.png';
	weatherIconContainer.append(icon);
	
	description.innerHTML = weather.description;
	descriptionWeather.append(description)
}

iniInformationWeather()


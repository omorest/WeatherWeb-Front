import {getDataWeatherByLatLon} from './js/requests'
import './style.css';

const cityCountry = document.querySelector('.city-country')
const tempIcon = document.querySelector('.temp-icon')
const weatherIconContainer = document.querySelector('.weather')
const descriptionWeather = document.querySelector('.description')

const iniInformationWeather = () => {
	async function success(position) {
		const {latitude, longitude} = position.coords;
		const dataWeather = await getDataWeatherByLatLon(latitude, longitude);
		const {main, description, icon} = dataWeather.weather[0];
		const {temp: temperature, humidity} = dataWeather.main;
		const {speed} = dataWeather.wind;
		const {country} = dataWeather.sys;
		const {name: city} = dataWeather;

		const weatherInfoRelevant = {
			main, description, icon,
			temperature, humidity,
			speed,
			country, city
		}
		createInformationWeather(weatherInfoRelevant);
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
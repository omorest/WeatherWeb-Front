import './style.css';

const weatherInfo = document.querySelector('.weather-info')
const cityCountry = document.querySelector('.city-country')
const tempIcon = document.querySelector('.temp-icon')
const descriptionWeather = document.querySelector('.description')

const getDataWeatherByCity = async (city, country) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.KEY}`;
	const res = await fetch(url);
	const data = await res.json();
	return data;
}

const getDataWeatherByLatLon = async (latitude, longitude) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.KEY}`;
	const res = await fetch(url);
	const data = await res.json();
	return data;
}

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
	let icon = document.createElement('img')
	let description = document.createElement('h3')
	
	temperature.classList.add('temperature')
	
	city.innerHTML = weather.city;
	country.innerHTML = weather.country;
	cityCountry.append(country, city);
	
	temperature.innerHTML = weather.temperature + 'º';
	icon.src = 'http://openweathermap.org/img/wn/' + weather.icon + '@2x.png';
	tempIcon.append(temperature, icon);
	
	description.innerHTML = weather.description;
	descriptionWeather.append(description)
}

iniInformationWeather()
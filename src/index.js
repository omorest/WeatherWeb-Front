import './style.css';

const container = document.querySelector('.container');

const getDataWeatherByCity = async (city, country) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.KEY}`;
	const res = await fetch(url);
	const data = await res.json();
	return data;
}

const getDataWeatherByLatLon = async (latitude, longitude) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid&units=metric&appid=${process.env.KEY}`;
	const res = await fetch(url);
	const data = await res.json();
	return data;
}

const iniInformationWeather = () => {
	async function success(position) {
		const {latitude, longitude} = position.coords;
		console.log(latitude, longitude)
		const dataWeather = await getDataWeatherByLatLon(latitude, longitude)
		console.log(dataWeather)
	};
	
	navigator.geolocation.getCurrentPosition(success);
}

iniInformationWeather()
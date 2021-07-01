import { toWeatherInformation } from "./parser";

export const getDataWeatherByCity = async (city, country) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.KEY}`;
	const res = await fetch(url);
	const data = await res.json();
	return toWeatherInformation(data)
}

export const getDataWeatherByLatLon = async ({latitude, longitude}) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.KEY}`;
	const res = await fetch(url);
	const data = await res.json();
	return toWeatherInformation(data)
}
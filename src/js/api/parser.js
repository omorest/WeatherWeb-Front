import { meterPerSecondToKmPerHour } from "../utils";

export function toWeatherInformation(dataWeather) {
	const { main, description, icon } = dataWeather.weather[0];
	const { temp: temperature, humidity } = dataWeather.main;
	const speedWind = meterPerSecondToKmPerHour(dataWeather.wind.speed);
	const { country } = dataWeather.sys;
	const { name: city } = dataWeather;

	const weatherInfoRelevant = {
		main, description, icon,
		temperature, humidity,
		speedWind,
		country, city
	};
	return weatherInfoRelevant;
}

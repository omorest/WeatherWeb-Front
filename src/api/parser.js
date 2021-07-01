export function toWeatherInformation(dataWeather) {
	const { main, description, icon } = dataWeather.weather[0];
	const { temp: temperature, humidity } = dataWeather.main;
	const { speed } = dataWeather.wind;
	const { country } = dataWeather.sys;
	const { name: city } = dataWeather;

	const weatherInfoRelevant = {
		main, description, icon,
		temperature, humidity,
		speed,
		country, city
	};
	return weatherInfoRelevant;
}

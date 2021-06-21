import './style.css';
// import dotenv from "dotenv";
// dotenv.config();

const input = document.querySelector('input')
const container = document.querySelector('.container')
const texto = document.querySelector('.texto')
console.log(process.env.KEY)
// const getDataWeather = async (city, country) => {
// 	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.KEY}`
// 	const res = await fetch(url)
// 	const data = await res.json()
// 	console.log(data)
// }

// getDataWeather('puerto de la cruz', 'spain')

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const p = document.querySelector('p')
	  if (p) p.remove();
	
		const temperature = document.createElement('p')
		temperature.innerHTML = input.value
		container.append(temperature)
		input.value = ''
	}
});
const input = document.querySelector('.input')
const container = document.querySelector('.container')
const texto = document.querySelector('.texto')

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
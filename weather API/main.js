

const sunShower = `
	<div class="icon sun-shower">
	  <div class="cloud"></div>
	  <div class="sun">
    	<div class="rays"></div>
  	  </div>
  	  <div class="rain"></div>
  	</div>
	`
const thunderStorm = `
	<div class="icon thunder-storm">
	  <div class="cloud"></div>
	  <div class="lightning">
	    <div class="bolt"></div>
	    <div class="bolt"></div>
	  </div>
	</div>
	`
const cloudy = `
	<div class="icon cloudy">
	  <div class="cloud"></div>
	  <div class="cloud"></div>
	</div>
	`
const flurries = `
	<div class="icon flurries">
	  <div class="cloud"></div>
	  <div class="snow">
	    <div class="flake"></div>
	    <div class="flake"></div>
	  </div>
	</div>
	`
const sunny = `
	<div class="icon sunny">
	  <div class="sun">
	    <div class="rays"></div>
	  </div>
	</div>
	`
const rainy = `
	<div class="icon rainy">
	  <div class="cloud"></div>
	  <div class="rain"></div>
	</div>
	`
const weatherContainer = document.querySelector('.weather-container');
const submitButton = document.querySelector('.submit');

function getWeather(e) {
	e.preventDefault();
	const city = document.querySelector('input[type=text]').value || "hongkong";
	const key = "f535debb98ce44971795e7d37e1f37e2";
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
  	  .then(resp => resp.json())
  	  .then(data => display(data));
 	document.querySelector('input[type=text]').value = ""; 	  
}

function handleIcon(weather) {
	if(weather.includes('sun') || weather.includes('clear')) {
		return sunny;
	} else if(weather.includes('shower')) {
		return sunShower;
	} else if(weather.includes('rain')) {
		return rainy;
	} else if(weather.includes('thunder')) {
		return thunderStorm;
	} else if(weather.includes('flurries')) {
		return flurries;
	} else {
		return cloudy;
	}
}

function date() {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const monthSelected = months.slice(month);
	const year = date.getFullYear();
	const dateFormat = `${day} ${monthSelected[0]} ${year}`;
	return dateFormat;
}

function backgroundImage(weather) {
	let image;
	if(weather.includes('sun') || weather.includes('clear')) {
		image = "sunny.jpg";
	} else if(weather.includes('shower')) {
		image = "shower.jpg";
	} else if(weather.includes('rain')) {
		image = "rainy.jpg";
	} else if(weather.includes('thunder')) {
		image = "rainy.jpg";
	} else if(weather.includes('flurries')) {
		image = "rainy.jpg";
	} else {
		image = "cloudy.jpg";
	};
	document.body.style.backgroundImage = `url(${image})`;
}

function display(info) {
	const { weather, main, wind, name } = info;
	const description = weather[0].description;
	backgroundImage(description);
  	weatherContainer.innerHTML = `
	  	<div class="name">${name}</div>
		<div class="date">${date()}</div>
		<div class="description">${handleIcon(description)}<span>${description}</span></div>
		<div class="temp-container">
			<div class="temp">temp: ${main.temp}</div>
			<div class="feels-like">feels like: ${main.feels_like} C</div>
			<div class="feels-min">min: ${main.temp_min}</div>
			<div class="feels-max">max: ${main.temp_max}</div>
		</div>
		<div class="humidity">humidity: ${main.humidity}</div>
		<div class="wind">wind: ${wind.speed}</div>
	  	`

}

submitButton.addEventListener('submit', getWeather);




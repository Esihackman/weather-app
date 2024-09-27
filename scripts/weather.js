

// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");
// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
//   if(response.status == 404) {
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";

//   } else{
//     if(data.weather[0].main == "Clear") {
//       weatherIcon.src ="./assets/images/sun-image.png";
//     }
    
//     else if (data.weather[0].main == "Rain") {
//       weatherIcon.src ="./assets/images/rainy-images.png";
//     }
    
//     else if (data.weather[0].main == "Drizzle") {
//       weatherIcon.src ="./assets/images/drizzy-icon.png";
//     }
    
//     else if (data.weather[0].main == "Mist") {
//       weatherIcon.src ="./assets/images/mist-image.png";
//     }
    
//   }


//   var data = await response.json();



//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


//  if (data.weather[0].main == "clouds"){
//    weatherIcon.src ="./assets/images/clouds-image.png";
// }

// else if(data.weather[0].main == "Clear") {
//   weatherIcon.src ="./assets/images/sun-image.png";
// }

// else if (data.weather[0].main == "Rain") {
//   weatherIcon.src ="./assets/images/rainy-images.png";
// }

// else if (data.weather[0].main == "Drizzle") {
//   weatherIcon.src ="./assets/images/drizzy-icon.png";
// }

// else if (data.weather[0].main == "Mist") {
//   weatherIcon.src ="./assets/images/mist-image.png";
// }

// document.querySelector(".weather").style.display = "block";
// document.querySelector(".error").style.display = "none";

// }


// searchBtn.addEventListener("click", ()=>{
//   checkWeather(searchBox.value);
// })

// state
let currCity = 'Accra';
let units ='metric;'

// selectors
let city = document.querySelector('.weather__city');
let datetime = document.querySelector('.weather__datetime');
let weather_forecast = document.querySelector('.weather__forecast'); 
let weather__temperature = document.querySelector('.weather__temperature');
let weather__icon = document.querySelector('.weather__icon');
let weather__minmax = document.querySelector('.weather__minmax');
let weather__Humidity = document.querySelector('.weather__Humidity');
let weather__wind = document.querySelector('.weather__wind');
let weather__pressure = document.querySelector('.weather__pressure');
let weather__real_feel =document.querySelector('.weather__real_feel');


document.querySelector('.weather__search'),
addEventListener('submit',e=>{
  let search = document.querySelector('.weather__searchform');
  // prevent default action
  e.preventDefault();
  // change current city
  currCity = search.value;

  // get weather forecast
  getWeather();
  // clear form
   search.value = ''
})

// document.addEventListener('DOMContentLoaded', function() {
//    let searchForm = document.querySelector('weather__search');
  
//   if (searchForm) {
//     searchForm.addEventListener('submit', function(e) {
//       e.preventDefault();
//       let search = document.querySelector('.weather__searchform');
//       currCity = search.value;
//       console.log('HYY',currCity)
//       getWeather();
//       search.value = '';
//     });
//   }

  // Unit toggle event listeners
  let celsiusButton = document.querySelector('.weather_unit_celcius');
  let fahrenheitButton = document.querySelector('.weather_unit_fahrenheit');
  
  if (celsiusButton) {
    celsiusButton.addEventListener('click', () => {
      if (units !== 'metric') {
        units = 'metric';
        getWeather();
      }
    });
  }

  if (fahrenheitButton) {
    fahrenheitButton.addEventListener('click', () => {
      if (units !== 'imperial') {
        units = 'imperial';
        getWeather();
      }
    });
  }



// function getWeather(){
//   const API_KEY = '016a98c0d2172cd9c423c831d24c11ef';

//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`)
//   .then(response => response.json())
//   .then(function(data) {

//     console.log(data); // now inside .then block

//     city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`;

//     datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);

//     weather_forecast.innerHTML = `<p>${data.weather[0].main}</p>`;

//     weather__temperature.innerHTML = `${data.main.temp.toFixed()}&#176`;

//     weather__icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"/>`;

//     weather__minmax.innerHTML = `<p>Min: ${data.main.temp_min}&#176</p><p>Max: ${data.main.temp_max}&#176</p>`;

//     weather__real_feel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;

//     weather__Humidity.innerHTML = `${data.main.humidity}%`;

//     weather__wind.innerHTML = `${data.wind.speed} ${units === 'imperial' ? 'mph' : 'm/s'}`;

//     weather__pressure.innerHTML = `${data.main.pressure} hpa`;
//   })
//   .catch(error => {
//     console.error('Error:', error); // Handle any potential errors
//   });
// }

function getWeather() {
  const API_KEY = '016a98c0d2172cd9c423c831d24c11ef';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`)
    .then(response => {
      // Always check for errors
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Process the data
      console.log(data);

      city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`;
      datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
      weather_forecast.innerHTML = `<p>${data.weather[0].main}</p>`;
      weather__temperature.innerHTML = `${data.main.temp.toFixed()}&#176;`;
      weather__icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"/>`;
      weather__minmax.innerHTML = `<p>Min: ${data.main.temp_min}&#176;</p><p>Max: ${data.main.temp_max}&#176;</p>`;
      // weather__real_feel.innerHTML = `${data.main.feels_like.toFixed()}&#176;`;
      weather__Humidity.innerHTML = `${data.main.humidity}%`;
      // weather__wind.innerHTML = `${data.wind.speed}`;
      // weather__pressure.innerHTML = `${data.main.pressure} hPa`;
    })
    .catch(error => {
      console.error('Error:', error); // Handle any potential errors
    });
}


  

  


document.body.addEventListener('load',getWeather())

// units
document.querySelector('.weather_unit_celcius').addEventListener('click', () => {
  if (units !== 'metric') {
    units = 'metric';
    getWeather();
  }
});

document.querySelector('.weather_unit_fahrenheit').addEventListener('click', () => {
  if (units !== 'imperial') {
    units = 'imperial';
    getWeather();
  }
});


function convertTimeStamp(timestamp,timezone) {
   const convertTimezone = timezone/3600

   const date = new Date(timestamp * 1000);

   const options = {
    weekday:'long',
    day:'numeric',
    month:'long',
    year:'numeric',
    hour:'numeric',
    minute:'numeric',
    timeZone: `Etc/GMT${convertTimezone >= 0 ? '-' : '+'}${Math.abs(convertTimezone)}`,

       hour12:true,
   }
  //  return date.toLocalString('en-US', 'options')
     return date.toLocaleString();
 }

// convert country code to name
function convertCountryCode(country){
  let regionNames = new Intl.DisplayNames(['en'],{type:'region'});
  return regionNames.of(country)
}




const apiKey='da76d2182774c6a91ec28642bf00e293';
const apiUrl ='https://api.openweathermap.org/data/2.5/weather';
const locationInput= document.getElementById('locationInput');
const searchButtont= document.getElementById('searchButton');
const locationElement= document.getElementById('location');
const temperatureElement= document.getElementById('temprature');
const descriptionElement= document.getElementById('description');

searchButtont.addEventListener('click',() => {
    const location=locationInput.value; 
    if(location){
        fetchWeather(location);
    }
});

function  fetchWeather(location){
    const url=`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response=>response.json())
      .then(data => {
        locationElement.textContent=data.name;
        temperatureElement.textContent=`${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent=data.weather[0].description;
      })
      .catch(error=>{
        console.error('Error fetching weather data:',error);
      });
}
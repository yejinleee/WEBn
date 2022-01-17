const API_KEY = "f46786747f1df8b62a2a094619d604a4";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in",lat,"",lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  fetch(url)
  .then((response) => response.json())
    .then ((data) => {
      // console.log(data.name, data.weather[0].main);
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      weather.innerText = data. weather[0].main;
      city.innerText = data.name;
    });
}
function onGeoError(){
  alert("Can't find you, No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

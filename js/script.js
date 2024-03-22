// Here i'm using async and await keyword for to fetching details from Api.

let getWeatherData = async () => {
  let apiKey = "ca6ee2915aa74d8c34aef478df56136b";
  let city = document.getElementById("city").value;
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  let data = await response.json();

  // Using try and catch instead of .then() and catch() block.

  try {
    let weather = document.getElementById("weather");
    weather.innerHTML = `<br><h1>city : ${data.name}</h1>
        <h2>Temperature : MIN - ${data.main.temp_min} , MAX - ${data.main.temp_max}</h2>
        <h2>Humidity : ${data.main.humidity}%`;
  } catch (error) {
    alert(`Error fetching weather data.${error}`);
  }
};

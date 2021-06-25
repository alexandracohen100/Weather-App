function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("city");
  temperatureElement.innerHTML = math.round(response.data.main.temp);
}

let apiKey = "c83f0b36646f8f213130092c5eb7cca0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

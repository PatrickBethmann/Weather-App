export default class Display {
  static displayWeather(weather) {
    let status = document.querySelector('.weather-info-status');
    let location = document.querySelector('.weather-info-location');
    let date = document.querySelector('.weather-info-date');
    let time = document.querySelector('.weather-info-time');
    let temperature = document.querySelector('.weather-info-temperature');
    let temperatureUnits = document.querySelector('.weather-info-temperature-units');
    let humidity = document.querySelector('.weather-details-humidity');
    let windSpeed = document.querySelector('.weather-details-windspeed');

    // setting everything
    status.textContent = weather.status;
    location.textContent = weather.location;
    date.textContent = weather.date;
    time.textContent = weather.time;
    temperature.textContent = weather.temperature;
    temperatureUnits.textContent = weather.temperatureUnits;
    humidity.textContent = weather.humidity;
    windSpeed.textContent = weather.windSpeed;
  }
}

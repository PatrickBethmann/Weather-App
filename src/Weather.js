export default class Weather {
  constructor(weatherData, units) {
    this.status = weatherData.weather[0].main;
    this.location = weatherData.name;
    this.date = new Date().toLocaleDateString();
    this.time = new Date().toLocaleTimeString();
    this.temperature = weatherData.main.temp;
    this.temperatureUnits = units === 'metric' ? '°C' : '°F';

    // Details
    this.humidity = weatherData.main.humidity;
    this.windSpeed = weatherData.wind.speed;
  }
}

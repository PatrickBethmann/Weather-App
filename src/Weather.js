export default class Weather {
  constructor(weatherData) {
    this.status = weatherData.weather[0].main;
    this.location = weatherData.name;
    this.date = 'Date';
    this.time = 'Time';
    this.temperature = weatherData.main.temp;

    // Details
    this.humidity = weatherData.main.humidity;
    this.windSpeed = weatherData.wind.speed;
  }
}

export default class Weather {
  constructor(weatherData) {
    console.log(weatherData);
    this.status = weatherData.weather[0].main;
    this.location = weatherData.name;
    this.date = 'Date';
    this.time = 'Time';
    this.temperature = weatherData.main.temp;

    // Details
    this.humidity = weatherData.main.humidity;
    this.windSpeed = weatherData.wind.speed;
  }

  printWeather() {
    console.log(this.status, this.location, this.temperature);
  }
}

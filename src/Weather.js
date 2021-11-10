export default class Weather {
  constructor(weatherData) {
    console.log(weatherData);
    this.status = weatherData.weather[0].main;
    this.location = weatherData.name;
    this.date = 'Date';
    this.time = 'Time';
    this.temperature = weatherData.main.temp;

    console.log(this);
  }

  printWeather() {
    console.log(this.status);
  }
}

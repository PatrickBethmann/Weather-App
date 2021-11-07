export default class Weather {
  static async getWeather(location, units) {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=afe27c4e375966c49eaea24984167756`,
        { mode: 'cors' }
      );
      let weather = await response.json();
      console.log(weather);
    } catch (error) {
      console.log(error);
    }
  }
}

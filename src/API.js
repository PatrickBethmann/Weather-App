async function getWeather(location, units) {
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=afe27c4e375966c49eaea24984167756`
  );
  let weather = await response.json();
  console.log(weather);
}

export { getWeather };

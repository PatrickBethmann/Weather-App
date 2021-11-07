import './style.css';
import Weather from './weather.js';

let searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', (e) => {
  Weather.getWeather(
    document.querySelector('#location').value,
    document.querySelector('input[name="unit"]:checked').id
  );
});

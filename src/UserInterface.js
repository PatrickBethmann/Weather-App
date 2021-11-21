import { getWeather } from './API';
import Display from './Display';

const locationInput = document.querySelector('.search-form div input[id="location"]');

const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
  const currentUnit = document.querySelector('.unit-selector input:checked').value;

  getWeather(locationInput.value, currentUnit).then((response) => {
    Display.displayWeather(response);
  });
});

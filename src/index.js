import './style.css';
import * as API from './API';
import Display from './Display';
import Weather from './Weather';
import UserInterface from './UserInterface';

API.getWeather('brunswick, DE', 'metric').then((response) => {
  console.log(response);
  Display.displayWeather(response);
});

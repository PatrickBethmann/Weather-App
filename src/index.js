import './style.css';
import * as API from './API';
import Display from './Display';
import UserInterface from './UserInterface';

API.getWeather('brunswick, DE', 'metric').then((response) => {
  Display.displayWeather(response);
});

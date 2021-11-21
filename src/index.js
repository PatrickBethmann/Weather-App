import './style.css';
import * as API from './API';
import Display from './Display';

API.getWeather('brunswick, DE', 'metric').then((response) => {
  Display.displayWeather(response);
});

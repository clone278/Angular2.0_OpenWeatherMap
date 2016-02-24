import {WeatherData} from './weather.data';
import {WEATHER} from './mock-weather'
import {OpenWeatherService} from './open_weather.service'
import {Observable}     from 'rxjs/Observable';
import {Injectable} from 'angular2/core';

@Injectable()
export class WeatherService {
  constructor (private _service: OpenWeatherService) {}
  
  getWeather() {
    return this._service.getCurrentWeather("xxxx");
  }
}
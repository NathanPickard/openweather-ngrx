import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LocationData } from './models/location-data/location-data';
import { HourlyForecast } from './models/hourly-forecast/hourly-forecast';
import { WeatherData } from './models/weather-data/weather-data';
import { WeeklyForecast } from './models/weekly-forecast/weekly-forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
}

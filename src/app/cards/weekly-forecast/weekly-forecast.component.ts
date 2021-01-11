import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../models/weather-data/weather-data';

@Component({
  selector: 'app-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.scss']
})
export class WeeklyForecastComponent implements OnInit {

  data: WeatherData | undefined;

  @Input()
  set weatherData(weatherData: WeatherData) {
    this.data = weatherData || null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

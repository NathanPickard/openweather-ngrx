import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data/weather-data';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit {

  data: WeatherData = new WeatherData;

  @Input()
  set weatherData(weatherData: WeatherData) {
    this.data = weatherData || null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

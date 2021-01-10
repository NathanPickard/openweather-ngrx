import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../models/weather-data/weather-data'

@Component({
  selector: 'app-weather-discussion',
  templateUrl: './weather-discussion.component.html',
  styleUrls: ['./weather-discussion.component.scss']
})
export class WeatherDiscussionComponent implements OnInit {

  data: WeatherData | undefined;

  @Input()
  set weatherData(weatherData: WeatherData) {
    this.data = weatherData || null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

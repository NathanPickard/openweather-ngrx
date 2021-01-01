import { Component, OnInit } from '@angular/core';

import { WeatherData } from '../models/weather-data/weather-data';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

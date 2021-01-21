import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState, selectWeather } from '../../reducers';
import { WeatherData } from '../../models/weather-data/weather-data';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.scss']
})
export class WeeklyForecastComponent implements OnInit {

  // @Input()
  // set weatherData(weatherData: WeatherData) {
  //   this.data = weatherData || null;
  // }

  // data: WeatherData | undefined;
  data$: Observable<WeatherData> | undefined;

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.data$ = this.store.pipe(select(selectWeather));
  }

}

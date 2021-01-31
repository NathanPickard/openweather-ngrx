import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data/weather-data';
import { Store, select } from '@ngrx/store';
import { AppState, selectWeather } from '../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss']
})
export class HourlyForecastComponent implements OnInit {

  // @Input()
  // set weatherData(weatherData: WeatherData) {
  //   this.data = weatherData || null;
  // }

  // data: WeatherData | undefined;

  displayedColumns: string[] = ['Time', 'Temp', 'Wind', 'Condition'];

  data$: Observable<WeatherData> | undefined;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.data$ = this.store.pipe(select(selectWeather));
  }

}

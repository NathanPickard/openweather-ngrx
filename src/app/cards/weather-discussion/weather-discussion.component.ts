import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../models/weather-data/weather-data';
import { Store, select } from '@ngrx/store';
import { AppState, selectWeather } from '../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-discussion',
  templateUrl: './weather-discussion.component.html',
  styleUrls: ['./weather-discussion.component.scss']
})
export class WeatherDiscussionComponent implements OnInit {

  // @Input()
  // set weatherData(weatherData: WeatherData) {
  //   this.data = weatherData || null;
  // }

  // data: WeatherData | undefined;

  data$: Observable<WeatherData>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.data$ = this.store.pipe(select(selectWeather));
  }

}

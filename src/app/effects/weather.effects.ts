import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store'

import { LoadWeather } from '../actions/weather.actions';
import { LocationActionTypes, LocationsError, LoadLocations } from '../actions/location.actions';

import { AppState } from '../reducers';

import { WeatherService } from '../weather.service';

import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private store: Store<AppState>, private weatherService: WeatherService) { }

  @Effect()
  loadLocation$ = this.actions$
    .pipe(
      ofType<LoadLocations>(LocationActionTypes.LoadLocations),
      mergeMap((action) => this.weatherService.getWeather(action.payload.locationData)
        .pipe(
          map(weather => {
            return (new LoadWeather({ weatherData: weather }));
          }),
          catchError((errorMessage) => of(new LocationsError({ error: errorMessage })))
        ))
    );
}

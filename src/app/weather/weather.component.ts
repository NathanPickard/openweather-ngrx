import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Breakpoints, BreakpointObserver } from '@angular/cdk';

import { WeatherData } from '../models/weather-data/weather-data';
import { LocationData } from '../models/location-data/location-data';
import { City } from '../models/city/city';

import { WeatherService } from '../weather.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData: WeatherData;
  lat: string;
  long: string;
  cardsDesktop = [];
  cardsMobile = [];
  displayValues = false;
  spinnerSize = 8;
  locationData: LocationData = new LocationData();
  citiesCtrl = new FormControl();
  filteredCities: Observable<City[]>;
  cities = [];
  selectedLocations = '';

  cards = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        if (matches) {
          return this.cardsMobile;
        } else {
          return this.cardsDesktop;
        }
      })
    );

  constructor(private breakpointObserver: BreakpointObserver, public weatherService: WeatherService) { }

  ngOnInit(): void {
  }

}

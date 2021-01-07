import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { WeatherData } from '../models/weather-data/weather-data';
import { LocationData } from '../models/location-data/location-data';
import { City } from '../models/city/city';
import * as USCities from '../../assets/us_cities.json';

import { CurrentConditionsComponent } from '../cards/current-conditions/current-conditions.component';
import { WeatherDiscussionComponent } from '../cards/weather-discussion/weather-discussion.component';
import { WeeklyForecastComponent } from '../cards/weekly-forecast/weekly-forecast.component';
import { HourlyForecastComponent } from '../cards/hourly-forecast/hourly-forecast.component';
import { AboutDesktopComponent } from '../cards/about-desktop/about-desktop.component';
import { AboutMobileComponent } from '../cards/about-mobile/about-mobile.component';

import { WeatherService } from '../weather.service';

import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData: WeatherData | null = new WeatherData;
  lat: string = '';
  long: string = '';
  
  cardsDesktop: any = [];
  cardsMobile: any = [];
  displayValues = false;
  spinnerSize = 8;
  locationData: LocationData = new LocationData();
  citiesCtrl = new FormControl();
  filteredCities: Observable<City[]>;
  cities: any = [];
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

  constructor(private breakpointObserver: BreakpointObserver, public weatherService: WeatherService) {
    this.cardsDesktop = [
      {
        title: 'Current Conditions',
        cols: 1,
        rows: 1,
        component: CurrentConditionsComponent
      },
      {
        title: 'Hourly Forecast',
        cols: 1,
        rows: 1,
        component: HourlyForecastComponent
      },
      {
        title: 'Weather Discussion',
        cols: 1,
        rows: 2,
        component: WeatherDiscussionComponent
      },
      {
        title: 'Weekly Forecast',
        cols: 2,
        rows: 1,
        component: WeeklyForecastComponent
      },
      {
        title: 'About',
        cols: 3,
        rows: 1,
        component: AboutDesktopComponent
      }
    ];

    this.cardsMobile = [
      {
        title: 'Current Conditions',
        cols: 3,
        rows: 1,
        component: CurrentConditionsComponent
      },
      {
        title: 'Hourly Forecast',
        cols: 3,
        rows: 1,
        component: HourlyForecastComponent
      },
      {
        title: 'Weather Discussion',
        cols: 3,
        rows: 2,
        component: WeatherDiscussionComponent
      },
      {
        title: 'Weekly Forecast',
        cols: 3,
        rows: 1,
        component: WeeklyForecastComponent
      },
      {
        title: 'About',
        cols: 3,
        rows: 2,
        component: AboutMobileComponent
      }
    ];

    const homeCity: City = {
      capital: '',
      state: '',
      latitude: '',
      longitude: '',
      combinedName: '(your location)'
    };
    this.cities.push(homeCity);

    const citiesJSON = JSON.stringify(USCities);
    const parsedCities = JSON.parse(citiesJSON);
    parsedCities.default.forEach((parsedCity: { capital: string; abbr: string; lat: any; long: any; }) => {
      const city: City = {
        capital: parsedCity.capital,
        state: parsedCity.abbr,
        latitude: parsedCity.lat,
        longitude: parsedCity.long,
        combinedName: parsedCity.capital + ', ' + parsedCity.abbr
      };
      this.cities.push(city);
    });

    this.filteredCities = this.citiesCtrl.valueChanges
      .pipe(startWith(''),
        map(city => city ? this._filterCities(city) : this.cities.slice())
      );
  }

  private _filterCities(value: string): City[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter((city: { capital: string; }) => city.capital.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit(): void {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        this.savePosition(position);
      });
    } catch (error) {
      alert('Browser does not support location services');
    }
  }

  savePosition(position: any) {
    this.locationData.latitude = position.coords.latitude.toFixed(4).toString();
    this.locationData.longitude = position.coords.longitude.toFixed(4).toString();
    for (const city of this.cities) {
      if (city.combinedName === '(your location)') {
        city.latitude = this.locationData.latitude;
        city.longitude = this.locationData.longitude;
      }
    }

    this.weatherService.getWeather(this.locationData)
      .pipe(take(1))
      .subscribe(weather => this.weatherData = weather);
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    for (const city of this.cities) {
      if (city.combinedName === event.option.value) {
        this.locationData.latitude = city.latitude;
        this.locationData.longitude = city.longitude;
        this.weatherData = null;
        // this.weatherData = undefined;
        this.weatherService.getWeather(this.locationData)
          .pipe(take(1))
          .subscribe(weather => this.weatherData = weather);
        break;
      }
    }
  }

}

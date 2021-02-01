import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CurrentConditionsComponent } from './cards/current-conditions/current-conditions.component';
import { WeatherDiscussionComponent } from './cards/weather-discussion/weather-discussion.component';
import { WeeklyForecastComponent } from './cards/weekly-forecast/weekly-forecast.component';
import { HourlyForecastComponent } from './cards/hourly-forecast/hourly-forecast.component';
import { AboutMobileComponent } from './cards/about-mobile/about-mobile.component';
import { AboutDesktopComponent } from './cards/about-desktop/about-desktop.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';

import { NgxdModule } from '@ngxd/core';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './effects/weather.effects';
import { RadarDesktopComponent } from './radar-desktop/radar-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    PageNotFoundComponent,
    CurrentConditionsComponent,
    WeatherDiscussionComponent,
    WeeklyForecastComponent,
    HourlyForecastComponent,
    AboutMobileComponent,
    AboutDesktopComponent,
    RadarDesktopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxdModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forFeature([WeatherEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CurrentConditions } from '../current-conditions/current-conditions';
import { WeeklyForecast } from '../weekly-forecast/weekly-forecast';
import { HourlyForecast } from '../hourly-forecast/hourly-forecast';

export class WeatherData {
  forecastURL = '';
  forecast = {};
  currentConditions: CurrentConditions = new CurrentConditions();
  weeklyForecast: WeeklyForecast[] = [];
  hourlyForecast: HourlyForecast[] = [];
  NoaaWeeklyForecastUrl = '';
  NoaaHourlyForecastUrl = '';
  errorMessage = '';
  weatherDate: Date = new Date();
}

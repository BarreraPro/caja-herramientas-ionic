import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherResponse } from '../interfaces/api.interfaces';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly apiUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=18.4861&longitude=-69.9312&current_weather=true&timezone=America%2FSanto_Domingo';

  constructor(private http: HttpClient) {}

  getCurrentWeather() {
    return this.http.get<WeatherResponse>(this.apiUrl);
  }
}

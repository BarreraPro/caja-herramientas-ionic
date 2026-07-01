import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { WeatherResponse } from '../../interfaces/api.interfaces';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weather?: WeatherResponse;
  loading = false;
  error = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.error = '';
    this.loading = true;
    this.weatherService
      .getCurrentWeather()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => {
          this.weather = response;
        },
        error: () => {
          this.error = 'No se pudo actualizar el clima. Verifica tu conexión e intenta otra vez.';
        },
      });
  }
}

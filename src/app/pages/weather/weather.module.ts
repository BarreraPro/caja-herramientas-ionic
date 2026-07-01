import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WeatherPageRoutingModule } from './weather-routing.module';
import { WeatherPage } from './weather.page';

@NgModule({
  imports: [CommonModule, IonicModule, WeatherPageRoutingModule],
  declarations: [WeatherPage],
})
export class WeatherPageModule {}

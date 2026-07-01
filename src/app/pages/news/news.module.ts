import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NewsPageRoutingModule } from './news-routing.module';
import { NewsPage } from './news.page';

@NgModule({
  imports: [CommonModule, IonicModule, NewsPageRoutingModule],
  declarations: [NewsPage],
})
export class NewsPageModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'genero',
        loadChildren: () => import('../pages/gender/gender.module').then(m => m.GenderPageModule)
      },
      {
        path: 'edad',
        loadChildren: () => import('../pages/age/age.module').then(m => m.AgePageModule)
      },
      {
        path: 'universidades',
        loadChildren: () => import('../pages/universities/universities.module').then(m => m.UniversitiesPageModule)
      },
      {
        path: 'clima',
        loadChildren: () => import('../pages/weather/weather.module').then(m => m.WeatherPageModule)
      },
      {
        path: 'pokemon',
        loadChildren: () => import('../pages/pokemon/pokemon.module').then(m => m.PokemonPageModule)
      },
      {
        path: 'noticias',
        loadChildren: () => import('../pages/news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'acerca',
        loadChildren: () => import('../pages/about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

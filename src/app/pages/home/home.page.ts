import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  toolboxImageAvailable = true;
  tools = [
    {
      title: 'Género',
      description: 'Predice el género probable a partir de un nombre.',
      icon: 'male-female-outline',
      route: '/tabs/genero',
    },
    {
      title: 'Edad',
      description: 'Estima la edad y clasifica la etapa de vida.',
      icon: 'hourglass-outline',
      route: '/tabs/edad',
    },
    {
      title: 'Universidades',
      description: 'Busca universidades por país usando su nombre en inglés.',
      icon: 'school-outline',
      route: '/tabs/universidades',
    },
    {
      title: 'Clima',
      description: 'Consulta el clima actual de Santo Domingo.',
      icon: 'partly-sunny-outline',
      route: '/tabs/clima',
    },
    {
      title: 'Pokémon',
      description: 'Muestra imagen, habilidades y sonido del Pokémon.',
      icon: 'sparkles-outline',
      route: '/tabs/pokemon',
    },
    {
      title: 'Noticias',
      description: 'Carga las últimas noticias desde una API WordPress.',
      icon: 'newspaper-outline',
      route: '/tabs/noticias',
    },
    {
      title: 'Acerca de',
      description: 'Información personal y datos de contacto.',
      icon: 'person-circle-outline',
      route: '/tabs/acerca',
    },
  ];

  hideToolboxImage() {
    this.toolboxImageAvailable = false;
  }
}

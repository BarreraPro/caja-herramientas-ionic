import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { PokemonResponse } from '../../interfaces/api.interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: false,
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage {
  name = 'pikachu';
  pokemon?: PokemonResponse;
  loading = false;
  error = '';
  private audio?: HTMLAudioElement;

  constructor(private pokemonService: PokemonService) {}

  search() {
    this.error = '';
    this.pokemon = undefined;

    if (!this.name.trim()) {
      this.error = 'Escribe el nombre de un Pokémon.';
      return;
    }

    this.loading = true;
    this.pokemonService
      .find(this.name)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => {
          this.pokemon = response;
        },
        error: () => {
          this.error = 'No se encontró ese Pokémon o la API no respondió.';
        },
      });
  }

  playCry() {
    const cry = this.pokemon?.cries.latest;
    if (!cry) {
      this.error = 'Este Pokémon no tiene sonido latest disponible.';
      return;
    }

    this.audio?.pause();
    this.audio = new Audio(cry);
    this.audio.play().catch(() => {
      this.error = 'No se pudo reproducir el sonido en este navegador.';
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse } from '../interfaces/api.interfaces';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  find(name: string) {
    return this.http.get<PokemonResponse>(`${this.apiUrl}/${name.trim().toLowerCase()}`);
  }
}

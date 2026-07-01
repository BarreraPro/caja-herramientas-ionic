import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenderPrediction } from '../interfaces/api.interfaces';

@Injectable({ providedIn: 'root' })
export class GenderService {
  private readonly apiUrl = 'https://api.genderize.io/';

  constructor(private http: HttpClient) {}

  predict(name: string) {
    return this.http.get<GenderPrediction>(this.apiUrl, {
      params: { name: name.trim() },
    });
  }
}

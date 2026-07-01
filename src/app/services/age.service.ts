import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgePrediction } from '../interfaces/api.interfaces';

@Injectable({ providedIn: 'root' })
export class AgeService {
  private readonly apiUrl = 'https://api.agify.io/';

  constructor(private http: HttpClient) {}

  predict(name: string) {
    return this.http.get<AgePrediction>(this.apiUrl, {
      params: { name: name.trim() },
    });
  }
}

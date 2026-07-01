import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { University } from '../interfaces/api.interfaces';

@Injectable({ providedIn: 'root' })
export class UniversityService {
  private readonly proxyUrl = 'https://adamix.net/proxy.php';

  constructor(private http: HttpClient) {}

  searchByCountry(country: string) {
    const normalizedCountry = country.trim().replace(/\s+/g, '+');
    return this.http.get<University[]>(`${this.proxyUrl}?country=${normalizedCountry}`);
  }
}

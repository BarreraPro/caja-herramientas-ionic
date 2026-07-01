import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { University } from '../../interfaces/api.interfaces';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-universities',
  standalone: false,
  templateUrl: './universities.page.html',
  styleUrls: ['./universities.page.scss'],
})
export class UniversitiesPage {
  country = 'Dominican Republic';
  universities: University[] = [];
  searched = false;
  loading = false;
  error = '';

  constructor(private universityService: UniversityService) {}

  search() {
    this.error = '';
    this.universities = [];
    this.searched = false;

    if (!this.country.trim()) {
      this.error = 'Escribe el país en inglés para buscar universidades.';
      return;
    }

    this.loading = true;
    this.universityService
      .searchByCountry(this.country)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => {
          this.universities = response;
          this.searched = true;
        },
        error: () => {
          this.error = 'No se pudo consultar la lista de universidades. Intenta más tarde.';
        },
      });
  }
}

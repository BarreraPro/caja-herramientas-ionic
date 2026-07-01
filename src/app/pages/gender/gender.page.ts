import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { GenderPrediction } from '../../interfaces/api.interfaces';
import { GenderService } from '../../services/gender.service';

@Component({
  selector: 'app-gender',
  standalone: false,
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage {
  name = '';
  result?: GenderPrediction;
  loading = false;
  error = '';

  constructor(private genderService: GenderService) {}

  predict() {
    this.error = '';
    this.result = undefined;

    if (!this.name.trim()) {
      this.error = 'Escribe un nombre para consultar la predicción.';
      return;
    }

    this.loading = true;
    this.genderService
      .predict(this.name)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => {
          this.result = response;
          if (!response.gender) {
            this.error = 'La API no encontró una predicción para este nombre.';
          }
        },
        error: () => {
          this.error = 'No se pudo consultar Genderize ahora. Intenta nuevamente.';
        },
      });
  }

  get resultClass() {
    return this.result?.gender === 'female' ? 'female-card' : 'male-card';
  }

  get genderLabel() {
    if (this.result?.gender === 'male') {
      return 'Masculino';
    }

    if (this.result?.gender === 'female') {
      return 'Femenino';
    }

    return 'Sin predicción';
  }
}

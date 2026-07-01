import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AgePrediction } from '../../interfaces/api.interfaces';
import { AgeService } from '../../services/age.service';

type AgeStage = 'Joven' | 'Adulto' | 'Anciano';

@Component({
  selector: 'app-age',
  standalone: false,
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage {
  name = '';
  result?: AgePrediction;
  stage?: AgeStage;
  imageAvailable = true;
  loading = false;
  error = '';

  constructor(private ageService: AgeService) {}

  predict() {
    this.error = '';
    this.result = undefined;
    this.stage = undefined;
    this.imageAvailable = true;

    if (!this.name.trim()) {
      this.error = 'Escribe un nombre para consultar la edad.';
      return;
    }

    this.loading = true;
    this.ageService
      .predict(this.name)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => {
          this.result = response;
          if (response.age === null) {
            this.error = 'La API no encontró una edad estimada para este nombre.';
            return;
          }
          this.stage = this.resolveStage(response.age);
        },
        error: () => {
          this.error = 'No se pudo consultar Agify ahora. Intenta nuevamente.';
        },
      });
  }

  resolveStage(age: number): AgeStage {
    if (age < 30) {
      return 'Joven';
    }
    if (age < 60) {
      return 'Adulto';
    }
    return 'Anciano';
  }

  get imagePath() {
    return `assets/img/${this.stage?.toLowerCase()}.jpg`;
  }

  get message() {
    if (this.stage === 'Joven') {
      return 'Está en una etapa llena de energía, aprendizaje y oportunidades.';
    }
    if (this.stage === 'Adulto') {
      return 'Está en una etapa de experiencia, crecimiento y proyectos sólidos.';
    }
    return 'Está en una etapa de sabiduría, trayectoria y grandes historias.';
  }
}

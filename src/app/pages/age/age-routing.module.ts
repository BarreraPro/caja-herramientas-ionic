import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgePage } from './age.page';

const routes: Routes = [{ path: '', component: AgePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosalumnoPage } from './curso-lista-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: CursosalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosalumnoPageRoutingModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaalumnoPage } from './asistencia-detalle-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaalumnoPageRoutingModule {}

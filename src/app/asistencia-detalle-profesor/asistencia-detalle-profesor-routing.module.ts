import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsistenciaDetalleProfesorPage } from './asistencia-detalle-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaDetalleProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaDetalleProfesorPageRoutingModule { }
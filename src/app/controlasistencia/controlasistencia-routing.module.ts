import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlasistenciaPage } from './controlasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ControlasistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlasistenciaPageRoutingModule {}

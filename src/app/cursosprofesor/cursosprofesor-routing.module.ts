import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosprofesorPage } from './cursosprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: CursosprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosprofesorPageRoutingModule {}

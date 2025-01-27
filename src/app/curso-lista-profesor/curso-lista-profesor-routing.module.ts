import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosprofesorPage } from './curso-lista-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: CursosprofesorPage // si no es standalone, aquí se declara
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosprofesorPageRoutingModule {}

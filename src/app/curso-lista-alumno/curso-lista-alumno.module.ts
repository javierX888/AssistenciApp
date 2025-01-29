import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosalumnoPageRoutingModule } from './curso-lista-alumno-routing.module';

import { CursosalumnoPage } from './curso-lista-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosalumnoPageRoutingModule
  ],
  declarations: []
})
export class CursosalumnoPageModule {}

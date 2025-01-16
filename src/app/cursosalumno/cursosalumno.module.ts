import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosalumnoPageRoutingModule } from './cursosalumno-routing.module';

import { CursosalumnoPage } from './cursosalumno.page';

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

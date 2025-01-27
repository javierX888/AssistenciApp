import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CursosprofesorPageRoutingModule } from './curso-lista-profesor-routing.module';
// Ojo: no declares la página si es standalone

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosprofesorPageRoutingModule
  ]
})
export class CursosprofesorPageModule {}

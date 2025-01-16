import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosprofesorPageRoutingModule } from './cursosprofesor-routing.module';

import { CursosprofesorPage } from './cursosprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosprofesorPageRoutingModule
  ],
  declarations: []
})
export class CursosprofesorPageModule {}

/**
 * Importaciones necesarias para el módulo
 * - NgModule: Decorador para definir un módulo
 * - CommonModule: Funcionalidades comunes de Angular
 * - FormsModule: Manejo de formularios template-driven
 * - IonicModule: Componentes de Ionic
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

/**
 * Importación del módulo de routing
 */
import { Page404PageRoutingModule } from './page404-routing.module';

/**
 * Decorador @NgModule
 * Define la configuración del módulo:
 * - imports: Módulos necesarios para el funcionamiento
 * - declarations: Componentes que pertenecen a este módulo (vacío por ser standalone)
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page404PageRoutingModule
  ],
  declarations: []
})
export class Page404PageModule {}
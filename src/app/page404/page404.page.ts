/**
 * Importaciones necesarias para el componente
 * Component: Decorador que define la metadata del componente
 * OnInit: Interface para el ciclo de vida del componente
 * IonicModule: Módulo principal de Ionic
 */
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

/**
 * Decorador @Component
 * Define:
 * - selector: Nombre para usar el componente en HTML
 * - templateUrl: Ubicación del archivo HTML
 * - styleUrls: Ubicación de estilos CSS
 * - standalone: Componente independiente
 * - imports: Módulos necesarios
 */
@Component({
  selector: 'app-page404',
  templateUrl: './page404.page.html',
  styleUrls: ['./page404.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
/**
 * Clase Page404Page
 * Página de error 404 - No encontrado
 * Implementa OnInit para inicialización del componente
 */
export class Page404Page implements OnInit {

    /**
   * Constructor de la clase
   * No requiere inyección de dependencias
   */
  constructor() { }

    /**
   * Método del ciclo de vida
   * Se ejecuta después de la creación del componente
   */
  ngOnInit() {
  }

}

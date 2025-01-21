/**
 * Importación de Injectable para crear un servicio
 * Injectable permite que el servicio sea inyectado en otros componentes
 */
import { Injectable } from '@angular/core';

/**
 * Decorador @Injectable
 * Configura el servicio para estar disponible en toda la aplicación
 * providedIn: 'root' - Instancia única del servicio
 */
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  /**
   * Variable privada para controlar el estado de autenticación
   * true: usuario autenticado
   * false: usuario no autenticado
   */
  private authenticated = false;
  
  /**
   * Constructor del servicio
   * No requiere inyección de dependencias
   */
  constructor() { }

  /**
   * Método para verificar si el usuario está autenticado
   * @returns boolean - Estado de autenticación
   */
  isLogged() {
    return this.authenticated;
  }

  /**
   * Método para autenticar al usuario
   * Establece authenticated en true
   */
  login() {
    this.authenticated = true;
  }

  /**
   * Método para cerrar sesión
   * Establece authenticated en false
   */
  logout() {
    this.authenticated = false;
  }
}
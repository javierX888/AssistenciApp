/**
 * Importaciones necesarias para el guard
 * - CanActivateFn: Tipo para función de guard
 * - AuthserviceService: Servicio de autenticación
 * - Router: Servicio de navegación
 * - inject: Función para inyección de dependencias
 */
import { CanActivateFn } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

/**
 * Guard para protección de rutas
 * @param route Información de la ruta actual
 * @param state Estado de la navegación
 * @returns true si está autenticado, redirección a home si no
 */
export const guardGuard: CanActivateFn = (route, state) => {
  // Inyección de servicios necesarios
  const AuthService = inject(AuthserviceService);
  const router = inject(Router);

  // Verificación de autenticación
  if (AuthService.isLogged()) {
    return true; // Usuario autenticado
  } else {
    return router.createUrlTree(['/home']); // Redirección a home
  }
};
import { CanActivateFn } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

/**
 * Guard para protección de rutas
 * Controla acceso basado en autenticación y roles
 */
export const guardGuard: CanActivateFn = (route, state) => {
  // Inyección de servicios
  const AuthService = inject(AuthserviceService);
  const router = inject(Router);

  // Definición de rutas por tipo de acceso
  const publicRoutes = ['/home', '/login', '/crearcuenta', '/page404'];
  const professorRoutes = ['/cursosprofesor', '/controlasistencia'];
  const studentRoutes = ['/cursosalumno', '/asistenciaalumno'];

  // Permitir acceso a rutas públicas
  if (publicRoutes.includes(state.url)) {
    return true;
  }

  // Verificar autenticación
  if (!AuthService.isLogged()) {
    // Redirigir a home si no está autenticado
    router.navigate(['/home']);
    return false;
  }

  // Obtener rol del usuario
  const userRole = AuthService.getUserRole();
  
  // Verificar permisos por rol
  if (userRole === 'profesor' && professorRoutes.includes(state.url)) {
    return true;
  }
  
  if (userRole === 'alumno' && studentRoutes.includes(state.url)) {
    return true;
  }

  // Redirigir a home si no tiene permisos
  router.navigate(['/home']);
  return false;
};
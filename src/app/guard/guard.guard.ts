import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthserviceService);
  const router = inject(Router);

  const publicRoutes = ['/home', '/login', '/crearcuenta', '/page404'];
  const professorRoutes = ['/curso-lista-profesor', '/asistencia-detalle-profesor'];
  const studentRoutes = ['/curso-lista-alumno', '/asistencia-detalle-alumno', '/registrar-asistencia'];

  // 1. Rutas públicas => permitir
  if (publicRoutes.includes(state.url)) {
    return true;
  }

  // 2. Verificar si está logueado
  if (!authService.isLogged()) {
    router.navigate(['/home']);
    return false;
  }

  // 3. Rol
  const userRole = authService.getUserRole();

  // 4. Comparar rutas
  if (userRole === 'profesor' && professorRoutes.includes(state.url)) {
    return true;
  }
  if (userRole === 'alumno' && studentRoutes.includes(state.url)) {
    return true;
  }

  // 5. Si no coincide => redirigir a home
  router.navigate(['/home']);
  return false;
};

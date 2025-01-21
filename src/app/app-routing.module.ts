/**
 * Importaciones necesarias para el enrutamiento
 * - NgModule: Decorador para definir un módulo
 * - PreloadAllModules: Estrategia de precarga de módulos
 * - RouterModule: Módulo de rutas de Angular
 * - Routes: Interface para definir rutas
 * - guardGuard: Guard para proteger rutas
 */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guardGuard } from './guard/guard.guard';

/**
 * Definición de rutas de la aplicación
 * Cada ruta especifica:
 * - path: URL de la ruta
 * - loadChildren: Carga lazy del módulo
 * - canActivate: Guard de protección (opcional)
 */
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [guardGuard] // Ruta protegida
  },
  {
    path: '',
    redirectTo: 'home', // Redirección por defecto
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule),
    canActivate: [guardGuard]
  },
  {
    path: 'cursosalumno',
    loadChildren: () => import('./cursosalumno/cursosalumno.module').then( m => m.CursosalumnoPageModule),
    canActivate: [guardGuard]
  },
  {
    path: 'cursosprofesor',
    loadChildren: () => import('./cursosprofesor/cursosprofesor.module').then( m => m.CursosprofesorPageModule),
    canActivate: [guardGuard]
  },
  {
    path: 'controlasistencia',
    loadChildren: () => import('./controlasistencia/controlasistencia.module').then( m => m.ControlasistenciaPageModule),
    canActivate: [guardGuard]
  },
  {
    path: 'asistenciaalumno',
    loadChildren: () => import('./asistenciaalumno/asistenciaalumno.module').then( m => m.AsistenciaalumnoPageModule),
    canActivate: [guardGuard]
  },
  {
    path: 'page404',
    loadChildren: () => import('./page404/page404.module').then( m => m.Page404PageModule)
  },
];

/**
 * Módulo de rutas principal
 * Configura:
 * - RouterModule.forRoot: Rutas principales
 * - PreloadAllModules: Estrategia de precarga
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
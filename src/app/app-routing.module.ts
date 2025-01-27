import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guardGuard } from './guard/guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // EJEMPLO: si la página "home" también es un componente standalone
  {
    path: 'home',
    loadComponent: () => import('./home/home.page')
      .then(m => m.HomePage),
    canActivate: [guardGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page')
      .then(m => m.LoginPage)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./crearcuenta/crearcuenta.module')
      .then(m => m.CrearcuentaPageModule),
    canActivate: [guardGuard]
  },

  // Rutas para alumno
  {
    path: 'curso-lista-alumno',
    loadChildren: () => import('./curso-lista-alumno/curso-lista-alumno.module')
      .then(m => m.CursosalumnoPageModule),
    canActivate: [guardGuard]
  },

  // Rutas para profesor 
  {
    path: 'curso-lista-profesor',
    loadComponent: () => import('./curso-lista-profesor/curso-lista-profesor.page')
      .then(m => m.CursosprofesorPage),
    canActivate: [guardGuard]
  },

  // Ruta para ver asistencia del curso(profesor)
  {
    path: 'asistencia-detalle-profesor',
    loadComponent: () => import('./asistencia-detalle-profesor/asistencia-detalle-profesor.page')
      .then(m => m.AsistenciaDetalleProfesorPage),
    canActivate: [guardGuard]
  },

    // Ruta para ver asistencia alumno(profesor)
  {
    path: 'asistencia-detalle-alumno',
    loadChildren: () => import('./asistencia-detalle-alumno/asistencia-detalle-alumno.module')
      .then(m => m.AsistenciaalumnoPageModule),
    canActivate: [guardGuard]
  },

  // Ruta para registrar asistencia del curso(alumno)
  {
    path: 'registrar-asistencia',
    loadComponent: () => import('./registrar-asistencia/registrar-asistencia.page')
      .then(m => m.RegistrarAsistenciaPage),
    canActivate: [guardGuard]
  },  
  
  {
    path: 'page404',
    loadChildren: () => import('./page404/page404.module')
      .then(m => m.Page404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

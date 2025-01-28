import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule)
  },
  {
    path: 'cursosalumno',
    loadChildren: () => import('./cursosalumno/cursosalumno.module').then( m => m.CursosalumnoPageModule)
  },
  {
<<<<<<< Updated upstream
    path: 'cursosprofesor',
    loadChildren: () => import('./cursosprofesor/cursosprofesor.module').then( m => m.CursosprofesorPageModule)
  },
 
=======
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
    loadComponent: () => import('./asistencia-detalle-alumno/asistencia-detalle-alumno.page')
      .then(m => m.AsistenciaalumnoPage),
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

  { 
    path: '**', 
    redirectTo: 'page404' 
  }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

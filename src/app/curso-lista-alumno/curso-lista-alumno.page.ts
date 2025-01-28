import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { ConsumoAPIService } from '../services/consumo-api.service';

@Component({
  selector: 'app-curso-lista-alumno',
  templateUrl: './curso-lista-alumno.page.html',
  styleUrls: ['./curso-lista-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class CursosalumnoPage implements OnInit {

  alumnoId: number = 0;
  nombre: string = 'Alumno';
  cursos: any[] = [];  // Inicialmente vacío

  constructor(
    private router: Router,
    private consumoAPI: ConsumoAPIService
  ) {
    // Recuperar 'alumnoId' y 'nombreAlumno' desde el login
    const navData = this.router.getCurrentNavigation()?.extras.state;
    if (navData) {
      this.alumnoId = navData['alumnoId'] || 2;
      this.nombre   = navData['nombreAlumno'] || 'Alumno';
    }
  }

  ngOnInit() {
    // Llamar a /alumnos/:alumnoId/cursos
    this.consumoAPI.getCursosAlumno(this.alumnoId).subscribe({
      next: (res: any) => {
        console.log('Cursos del alumno:', res);
        this.cursos = res;  // asignamos al array que se muestra en la template
      },
      error: (err) => {
        console.error('Error al obtener cursos del alumno', err);
      }
    });
  }

  verCurso(curso: any) {
    const navExtras: NavigationExtras = {
      state: {
        alumnoId: this.alumnoId,
        profesorId: curso.profesorId, // etc.
        cursoId: curso.id,
        nombreCurso: curso.nombre,
        codigo: curso.codigo,
        seccion: curso.seccion
      }
    };
    // Ojo: EXACTAMENTE '/asistencia-detalle-alumno'
    this.router.navigate(['/asistencia-detalle-alumno'], navExtras);
  }  

  volverALogin() {
    this.router.navigate(['/login']);
  }
}
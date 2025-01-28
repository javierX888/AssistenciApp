import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConsumoAPIService } from '../services/consumo-api.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-asistencia-detalle-alumno',
  templateUrl: './asistencia-detalle-alumno.page.html',
  styleUrls: ['./asistencia-detalle-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AsistenciaalumnoPage implements OnInit {

  profesorId: number = 0;
  cursoId: number = 0;
  alumnoId: number = 0;
  nombreCurso: string = '';
  codigoCurso: string = '';
  seccionCurso: string = '';

  asistencias: Array<{ fecha: string; estado: string }> = [];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private consumoAPI: ConsumoAPIService
  ) {
    const navData = this.router.getCurrentNavigation()?.extras.state;
    if (navData) {
      this.profesorId   = navData['profesorId']   || 1;
      this.cursoId      = navData['cursoId']      || 1;
      this.alumnoId     = navData['alumnoId']     || 2;
      this.nombreCurso  = navData['nombreCurso']  || 'Curso no encontrado';
      this.codigoCurso  = navData['codigo']       || 'Código no encontrado';
      this.seccionCurso = navData['seccion']      || 'Sección no encontrada';
    }
  }

  ngOnInit(): void {
    // Llamar al endpoint /profesores/:prof_id/cursos/:curso_id/alumnos/:alumno_id
    this.consumoAPI
      .getAlumnoDeUnCurso(this.profesorId, this.cursoId, this.alumnoId)
      .subscribe({
        next: (alumno: any) => {
          console.log('Alumno con asistencias:', alumno);
          // Ej: alumno: { id, nombre, status, asistencias: [...] }
          this.asistencias = alumno.asistencias || [];
        },
        error: (err: any) => {
          console.error('Error al obtener los datos del alumno:', err);
        }
      });
  }

  calcularPorcentajeAsistencia(): string {
    const totalClases = this.asistencias.length;
    if (totalClases === 0) return '0%';

    const presentes = this.asistencias.filter(a => a.estado === 'P').length;
    return Math.round((presentes / totalClases) * 100) + '%';
  }

  async escanearQR() {
    // En vez de mostrar el alert, navegamos a "registrar-asistencia"
    const navExtras: NavigationExtras = {
      state: {
        alumnoId: this.alumnoId,
        codigo: this.codigoCurso,
        seccion: this.seccionCurso,
        // y cualquier otro dato que necesites
      }
    };
    this.router.navigate(['/registrar-asistencia'], navExtras);
  }  

  volverACursos() {
    this.router.navigate(['/curso-lista-alumno']);
  }
}

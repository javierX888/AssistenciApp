import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

interface AsistenciaClase {
  fecha: string;
  estado: 'P' | 'A';
}

@Component({
  selector: 'asistencia-detalle-alumno',
  templateUrl: './asistencia-detalle-alumno.page.html',
  styleUrls: ['./asistencia-detalle-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AsistenciaalumnoPage implements OnInit {
  nombreCurso: string = '';
  codigoCurso: string = '';
  seccionCurso: string = '';
  asistencias: AsistenciaClase[] = [
    { fecha: '01/03/2024', estado: 'P' },
    { fecha: '02/03/2024', estado: 'A' },
    { fecha: '03/03/2024', estado: 'P' },
    { fecha: '04/03/2024', estado: 'P' },
    { fecha: '05/03/2024', estado: 'A' },
    { fecha: '06/03/2024', estado: 'P' },
    { fecha: '07/03/2024', estado: 'P' },
    { fecha: '08/03/2024', estado: 'P' },
    { fecha: '09/03/2024', estado: 'A' },
    { fecha: '10/03/2024', estado: 'P' }
  ];

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      nombreCurso: string,
      codigo: string,
      seccion: string
    };
    this.nombreCurso = state?.nombreCurso  || 'Curso no encontrado';
    this.codigoCurso = state?.codigo || 'Código no encontrado';
    this.seccionCurso = state?.seccion || 'Sección no encontrada';
  }

  ngOnInit(): void {
    if (!this.nombreCurso || !this.codigoCurso || !this.seccionCurso) {
      console.warn('Missing course information, redirecting to courses page');
      this.volverACursos();
    }
  }

  calcularPorcentajeAsistencia(): string {
    const totalClases = this.asistencias.length;
    const presentes = this.asistencias.filter(a => a.estado === 'P').length;
    return Math.round((presentes / totalClases) * 100) + '%';
  }

  async escanearQR() {
    // Por ahora no escaneamos, solo navegamos
    const navExtras: NavigationExtras = {
      state: {
        alumnoId: 2,
        codigo: this.codigoCurso,
        seccion: this.seccionCurso
      }
    };
    this.router.navigate(['/registrar-asistencia'], navExtras);
  }

  volverACursos() {
    this.router.navigate(['/curso-lista-alumno']);
  }
}
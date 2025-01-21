import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Estudiante {
  nombre: string;
  asistencia: string;
  estado: 'P' | 'A';
  clases?: { fecha: string; estado: 'P' | 'A' }[];
  mostrarClases?: boolean;
}

@Component({
  selector: 'app-controlasistencia',
  templateUrl: './controlasistencia.page.html',
  styleUrls: ['./controlasistencia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ControlasistenciaPage implements OnInit {
  nombreCurso: string = '';
  codigoCurso: string = '';
  seccionCurso: string = '';

  estudiantes: Estudiante[] = [
    { 
      nombre: 'Juan Pérez', 
      asistencia: '65%', 
      estado: 'A',
      clases: [
        { fecha: '01/03/2024', estado: 'P' },
        { fecha: '02/03/2024', estado: 'A' },
        { fecha: '03/03/2024', estado: 'A' }
      ],
      mostrarClases: false
    },
    { 
      nombre: 'María González', 
      asistencia: '90%', 
      estado: 'P',
      clases: [
        { fecha: '01/03/2024', estado: 'P' },
        { fecha: '02/03/2024', estado: 'P' },
        { fecha: '03/03/2024', estado: 'P' }
      ],
      mostrarClases: false
    },
    { 
      nombre: 'Carlos Rodríguez', 
      asistencia: '50%', 
      estado: 'A',
      clases: [
        { fecha: '01/03/2024', estado: 'A' },
        { fecha: '02/03/2024', estado: 'A' },
        { fecha: '03/03/2024', estado: 'P' }
      ],
      mostrarClases: false
    },
    { 
      nombre: 'Ana Silva', 
      asistencia: '85%', 
      estado: 'P',
      clases: [
        { fecha: '01/03/2024', estado: 'P' },
        { fecha: '02/03/2024', estado: 'P' },
        { fecha: '03/03/2024', estado: 'P' }
      ],
      mostrarClases: false
    },
    { 
      nombre: 'Pedro Soto', 
      asistencia: '40%', 
      estado: 'A',
      clases: [
        { fecha: '01/03/2024', estado: 'A' },
        { fecha: '02/03/2024', estado: 'A' },
        { fecha: '03/03/2024', estado: 'A' }
      ],
      mostrarClases: false
    },
    { 
      nombre: 'Carmen López', 
      asistencia: '95%', 
      estado: 'P',
      clases: [
        { fecha: '01/03/2024', estado: 'P' },
        { fecha: '02/03/2024', estado: 'P' },
        { fecha: '03/03/2024', estado: 'P' }
      ],
      mostrarClases: false
    }
  ];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      curso: string,
      codigo: string,
      seccion: string
    };
    this.nombreCurso = state?.curso || 'Curso no encontrado';
    this.codigoCurso = state?.codigo || 'Código no encontrado';
    this.seccionCurso = state?.seccion || 'Sección no encontrada';
  }

  ngOnInit() { }

  toggleClases(estudiante: Estudiante) {
    estudiante.mostrarClases = !estudiante.mostrarClases;
  }

  estaEnRiesgo(asistencia: string): boolean {
    const porcentaje = parseInt(asistencia.replace('%', ''));
    return porcentaje < 70;
  }

  volverACursos() {
    this.router.navigate(['/cursosprofesor']);
  }
}
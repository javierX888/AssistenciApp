import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cursosalumno',
  templateUrl: './cursosalumno.page.html',
  styleUrls: ['./cursosalumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class CursosalumnoPage implements OnInit {
  nombre: string = '';
  
  cursos = [
    { id: 1, nombre: 'Programacion Web', codigo: 'PVC xxxx-xxx', seccion: '001D' },
    { id: 2, nombre: 'App Moviles', codigo: 'PVC xxxx-xxx', seccion: '002D' },
    { id: 3, nombre: 'Base de datos', codigo: 'PVC xxxx-xxx', seccion: '003D' }
  ];

  constructor(private router: Router) {
    this.nombre = this.router.getCurrentNavigation()?.extras.state?.['id'] || 'Alumno';
  }
  ngOnInit(): void {
    console.log('CursosalumnoPage initialized');
  }

  verCurso(curso: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        curso: curso.nombre,
        codigo: curso.codigo,
        seccion: curso.seccion
      }
    };
    this.router.navigate(['/asistenciaalumno'], navigationExtras);
  }

  volverALogin() {
    this.router.navigate(['/login']);
  }
}
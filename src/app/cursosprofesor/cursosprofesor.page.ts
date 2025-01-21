import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cursosprofesor',
  templateUrl: './cursosprofesor.page.html',
  styleUrls: ['./cursosprofesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class CursosprofesorPage implements OnInit {
  nombre: string = '';
  
  cursos = [
    { id: 1, nombre: 'Programacion Web', codigo: 'PVC xxxx-xxx', seccion: '001D' },
    { id: 2, nombre: 'App Moviles', codigo: 'PVC xxxx-xxx', seccion: '002D' },
    { id: 3, nombre: 'Base de datos', codigo: 'PVC xxxx-xxx', seccion: '003D' }
  ];

  constructor(private router: Router) {
    this.nombre = this.router.getCurrentNavigation()?.extras.state?.['id'] || 'Profesor';
  }

  ngOnInit() { }

  verCurso(curso: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        curso: curso.nombre,
        codigo: curso.codigo,
        seccion: curso.seccion
      }
    };
    this.router.navigate(['/controlasistencia'], navigationExtras);
  }

  volverALogin() {
    this.router.navigate(['/login']);
  }
}
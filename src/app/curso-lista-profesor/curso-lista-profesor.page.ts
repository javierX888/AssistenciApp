import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { ConsumoAPIService } from '../services/consumo-api.service';

@Component({
  selector: 'app-curso-lista-profesor',
  templateUrl: './curso-lista-profesor.page.html',
  styleUrls: ['./curso-lista-profesor.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class CursosprofesorPage implements OnInit {

  nombre: string = '';
  profesorId: number = 0;
  cursos: any[] = [];

  constructor(
    private consumoAPI: ConsumoAPIService,
    private router: Router
  ) {
    // Aquí recuperas data desde login
    const navExtras = this.router.getCurrentNavigation()?.extras.state;
    if (navExtras) {
      this.profesorId = navExtras['profesorId'] || 1;
      this.nombre = navExtras['nombreProfesor'] || 'Profesor';
    } else {
      this.profesorId = 1;
      this.nombre = 'Profesor';
    }
  }

  ngOnInit() {
    // Llamada a la API para obtener cursos del profesor
    this.consumoAPI.getCursosProfesor(this.profesorId).subscribe({
      next: (res: any) => {
        this.cursos = res;
        console.log('Cursos del profesor:', res);
      },
      error: (err) => {
        console.error('Error al obtener cursos:', err);
      }
    });
  }

  verCurso(curso: any) {
    const navExtras: NavigationExtras = {
      state: {
        profesorId: this.profesorId,
        cursoId: curso.id,
        nombre: curso.nombre
      }
    };
    this.router.navigate(['/asistencia-detalle-profesor'], navExtras);
  }  

  volverALogin() {
    this.router.navigate(['/login']);
  }
}

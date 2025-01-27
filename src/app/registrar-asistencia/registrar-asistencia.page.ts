import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConsumoAPIService } from '../services/consumo-api.service';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RegistrarAsistenciaPage implements OnInit {

  constructor(
    private router: Router,
    private consumoAPI: ConsumoAPIService
  ) { }

  ngOnInit() {}

  volverACursos() {
    this.router.navigate(['/curso-lista-alumno']);
  }  

  // Podrías poner un botón "Simular escaneo" que llame a registrarAsistencia en la API

  simularEscaneo() {
    // Ejemplo: Obtenemos un ID, código, secc, etc.
    const alumnoId = 2;
    const codigo = 'MAT-101';
    const seccion = '013V';
    const fecha = new Date().toISOString().split('T')[0];
  
    this.consumoAPI.registrarAsistencia(alumnoId, codigo, seccion, fecha)
      .subscribe({
        next: (resp) => {
          console.log('Asistencia registrada', resp);
          // Podrías mostrar un alert
        },
        error: (err) => console.error('Error registrando asistencia', err)
      });
  }
  

}

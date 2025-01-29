import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConsumoAPIService } from '../services/consumo-api.service';
import { QRCodeComponent } from 'angularx-qrcode';


@Component({
  selector: 'app-asistencia-detalle-profesor',
  templateUrl: './asistencia-detalle-profesor.page.html',
  styleUrls: ['./asistencia-detalle-profesor.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    QRCodeComponent    // Permite usar <qrcode> en el HTML
  ]
})
export class AsistenciaDetalleProfesorPage implements OnInit {

  profesorId: number = 0;
  cursoId: number = 0;
  nombreCurso: string = '';
  alumnos: any[] = []; // Lista de alumnos

  // Datos para generar el QR
  // (puedes poner lo que necesites para que el alumno escanee)
  qrData: string = '';

  constructor(
    private router: Router,
    private consumoAPI: ConsumoAPIService
  ) {
    // 1. Recibir datos del curso vía NavigationExtras (state)
    const navData = this.router.getCurrentNavigation()?.extras.state;
    if (navData) {
      this.profesorId   = navData['profesorId'] || 0;
      this.cursoId      = navData['cursoId']    || 0;
      this.nombreCurso  = navData['nombre']     || 'Curso sin nombre';
    }
  }

  ngOnInit() {
    // 2. Llamar a la API para obtener alumnos del curso
    this.consumoAPI.getAlumnosCurso(this.profesorId, this.cursoId).subscribe({
      next: (res: any) => {
        this.alumnos = res;
        console.log('Alumnos del curso:', res);
      },
      error: (err) => {
        console.error('Error al obtener alumnos', err);
      }
    });

    // 3. Preparar la data del QR para este curso
    // Podrías meter profesorId, cursoId, fecha, etc.
    const dataQR = {
      profesorId: this.profesorId,
      cursoId:    this.cursoId,
      nombre:     this.nombreCurso,
      fecha:      new Date().toISOString()
    };
    this.qrData = JSON.stringify(dataQR);
    
  }
  volverACursos() {
    this.router.navigate(['/curso-lista-profesor']);
  }
}

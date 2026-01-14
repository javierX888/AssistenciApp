import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
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
    QRCodeComponent
  ]
})
export class AsistenciaDetalleProfesorPage implements OnInit {

  profesorId: number = 0;
  cursoId: number = 0;
  nombreCurso: string = '';
  alumnos: any[] = [];
  qrData: string = '';
  claseActiva: boolean = false;
  fechaClase: string = '';

  constructor(
    private router: Router,
    private consumoAPI: ConsumoAPIService,
    private alertController: AlertController
  ) {
    const navData = this.router.getCurrentNavigation()?.extras.state;
    if (navData) {
      this.profesorId   = navData['profesorId'] || 0;
      this.cursoId      = navData['cursoId']    || 0;
      this.nombreCurso  = navData['nombre']     || 'Curso sin nombre';
    }
  }

  ngOnInit() {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.consumoAPI.getAlumnosCurso(this.profesorId, this.cursoId).subscribe({
      next: (res: any) => {
        this.alumnos = res;
        console.log('Alumnos del curso:', res);
      },
      error: (err) => {
        console.error('Error al obtener alumnos', err);
      }
    });
  }

  async iniciarClase() {
    this.claseActiva = true;
    this.fechaClase = new Date().toLocaleDateString('es-CL');
    
    const dataQR = {
      profesorId: this.profesorId,
      cursoId: this.cursoId,
      nombre: this.nombreCurso,
      fecha: this.fechaClase
    };
    this.qrData = JSON.stringify(dataQR);

    const alert = await this.alertController.create({
      header: 'Clase Iniciada',
      message: `Clase del ${this.fechaClase} iniciada. Los alumnos pueden escanear el QR para registrar su asistencia.`,
      buttons: ['OK']
    });
    await alert.present();
  }

  async finalizarClase() {
    const alert = await this.alertController.create({
      header: 'Finalizar Clase',
      message: '¿Estás seguro de finalizar la clase? Los alumnos ya no podrán registrar asistencia.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Finalizar',
          handler: () => {
            this.claseActiva = false;
            this.mostrarAlerta('Clase Finalizada', 'La clase ha sido finalizada correctamente.');
          }
        }
      ]
    });
    await alert.present();
  }

  calcularPorcentaje(alumno: any): number {
    if (!alumno.asistencias || alumno.asistencias.length === 0) return 0;
    const presentes = alumno.asistencias.filter((a: any) => a.estado === 'P').length;
    return Math.round((presentes / alumno.asistencias.length) * 100);
  }

  contarPresentes(alumno: any): number {
    if (!alumno.asistencias) return 0;
    return alumno.asistencias.filter((a: any) => a.estado === 'P').length;
  }

  contarTotal(alumno: any): number {
    return alumno.asistencias ? alumno.asistencias.length : 0;
  }

  getBadgeColor(alumno: any): string {
    const porcentaje = this.calcularPorcentaje(alumno);
    if (porcentaje < 70) return 'danger';
    if (porcentaje < 80) return 'warning';
    return 'success';
  }

  getItemClass(alumno: any): string {
    const porcentaje = this.calcularPorcentaje(alumno);
    if (porcentaje < 70) return 'item-danger';
    if (porcentaje < 80) return 'item-warning';
    return 'item-success';
  }

  getAvatarClass(alumno: any): string {
    const porcentaje = this.calcularPorcentaje(alumno);
    if (porcentaje < 70) return 'avatar-danger';
    if (porcentaje < 80) return 'avatar-warning';
    return 'avatar-success';
  }

  async justificarInasistencia(alumno: any) {
    const alert = await this.alertController.create({
      header: 'Justificar Inasistencia',
      message: `Justificar inasistencia de ${alumno.nombre}`,
      inputs: [
        {
          name: 'justificacion',
          type: 'textarea',
          placeholder: 'Ingrese la justificación...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: (data) => {
            if (data.justificacion) {
              this.mostrarAlerta('Justificación Guardada', `Se ha guardado la justificación para ${alumno.nombre}`);
              // Aquí podrías llamar a la API para guardar la justificación
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  volverACursos() {
    this.router.navigate(['/curso-lista-profesor']);
  }
}

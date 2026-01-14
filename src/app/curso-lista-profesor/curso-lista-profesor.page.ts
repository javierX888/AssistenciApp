import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController, ActionSheetController } from '@ionic/angular';
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
    private router: Router,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController
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

  async abrirPerfil() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones de Perfil',
      buttons: [
        {
          text: 'Cambiar Foto de Perfil',
          icon: 'camera-outline',
          handler: () => {
            this.cambiarFotoPerfil();
          }
        },
        {
          text: 'Ver Información',
          icon: 'information-circle-outline',
          handler: () => {
            this.mostrarInfoPerfil();
          }
        },
        {
          text: 'Cerrar Sesión',
          icon: 'log-out-outline',
          role: 'destructive',
          handler: () => {
            this.volverALogin();
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async cambiarFotoPerfil() {
    const alert = await this.alertController.create({
      header: 'Cambiar Foto de Perfil',
      message: 'Esta funcionalidad permite subir una foto desde tu dispositivo.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async mostrarInfoPerfil() {
    const alert = await this.alertController.create({
      header: 'Mi Perfil',
      message: `Nombre: ${this.nombre}\nID: ${this.profesorId}\nTipo: Profesor`,
      buttons: ['OK']
    });
    await alert.present();
  }
}

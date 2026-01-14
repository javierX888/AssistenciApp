import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConsumoAPIService } from '../services/consumo-api.service';

// Importa los objetos de Capacitor Camera
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RegistrarAsistenciaPage implements OnInit {

  // Datos recibidos del state (por ejemplo: ID del alumno, curso, etc.)
  alumnoId: number = 0;
  codigo: string = '';
  seccion: string = '';
  fotoTomada: string | null = null;
  asistenciaRegistrada: boolean = false;

  constructor(
    private router: Router,
    private consumoAPI: ConsumoAPIService,
    private alertController: AlertController
  ) {
    // Recuperar datos pasados con NavigationExtras
    const navData = this.router.getCurrentNavigation()?.extras.state;
    if (navData) {
      this.alumnoId = navData['alumnoId'] || 0;
      this.codigo   = navData['codigo']   || '';
      this.seccion = navData['seccion']  || '';
    }
  }

  ngOnInit() {
    // Aquí no hay lógica adicional, pero si necesitas algo al inicializar, ponlo
  }

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Base64, // Cambiar a Base64 para enviar a Cloudinary
        source: CameraSource.Camera
      });
      
      // Convertir a formato compatible con Cloudinary
      this.fotoTomada = `data:image/jpeg;base64,${image.base64String}`;
      console.log('Foto tomada en Base64');
      
      await this.mostrarAlerta('Foto Capturada', '¿Deseas registrar tu asistencia con esta foto?');
    } catch (err) {
      console.error('Error al tomar foto:', err);
      await this.mostrarAlerta('Error', 'No se pudo tomar la foto');
    }
  }

  async registrarAsistencia() {
    if (!this.fotoTomada) {
      await this.mostrarAlerta('Error', 'Primero debes tomar una foto');
      return;
    }

    const fechaActual = new Date().toLocaleDateString('es-CL');
    
    // Primero subir la foto a Cloudinary
    this.consumoAPI.uploadFotoAsistencia(this.alumnoId, this.fotoTomada).subscribe({
      next: (respFoto) => {
        console.log('Foto subida:', respFoto.url);
        
        // Luego registrar la asistencia con la URL de la foto
        this.consumoAPI.registrarAsistencia(
          this.alumnoId,
          this.codigo,
          this.seccion,
          fechaActual
        ).subscribe({
          next: async (resp) => {
            this.asistenciaRegistrada = true;
            const alert = await this.alertController.create({
              header: 'Éxito',
              message: 'Asistencia y foto registradas correctamente',
              buttons: [{
                text: 'OK',
                handler: () => {
                  this.volverACursos();
                }
              }]
            });
            await alert.present();
          },
          error: async (err) => {
            await this.mostrarAlerta('Error', 'No se pudo registrar la asistencia');
          }
        });
      },
      error: async (err) => {
        await this.mostrarAlerta('Error', 'No se pudo subir la foto al servidor');
      }
    });
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
    this.router.navigate(['/curso-lista-alumno']);
  }
}

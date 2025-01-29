import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
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
        quality: 90,                   // Calidad de la foto (0-100)
        resultType: CameraResultType.Uri,  // Cómo retornará el plugin la imagen (Uri/Base64/etc.)
        source: CameraSource.Camera    // Fuente: cámara (puede ser "Prompt", "Photos", etc.)
      });
      console.log('Foto tomada:', image);

      // Por ejemplo, image.webPath es una ruta que puedes colocar en un <img [src]="image.webPath">
      // En un dispositivo real, se abrirá la cámara nativa.
      // En la web/PC, se abrirá el diálogo para elegir archivos como fallback.
    } catch (err) {
      console.error('Error al tomar foto:', err);
    }
  }

  volverACursos() {
    this.router.navigate(['/curso-lista-alumno']);
  }
}

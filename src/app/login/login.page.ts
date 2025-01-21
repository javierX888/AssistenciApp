/**
 * Importaciones necesarias para el funcionamiento del login
 * - Component, OnInit: Core de Angular
 * - IonicModule, AlertController: Componentes de Ionic
 * - Router, NavigationExtras: Manejo de navegación
 * - FormControl, FormGroup: Manejo de formularios
 * - AuthService: Servicio de autenticación
 */
import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';
import { CommonModule } from '@angular/common';

/**
 * Decorador del componente
 * Configuración standalone y módulos necesarios
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, ReactiveFormsModule, CommonModule]
})
export class LoginPage implements OnInit {
  /** Variable para control de validación */
  validar: boolean = true;

  /** 
   * Formulario reactivo para login
   * Campos:
   * - user: nombre de usuario (4-20 caracteres)
   * - pass: contraseña (4-20 caracteres)
   */
  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
  });

  /**
   * Constructor
   * @param router Servicio de navegación
   * @param authservice Servicio de autenticación
   * @param alertController Controlador de alertas
   */
  constructor(
    private router: Router,
    private authservice: AuthserviceService,
    private alertController: AlertController
  ) { }

  /** Inicialización del componente */
  ngOnInit() { }

  /**
   * Método para mostrar alertas
   * @param header Título de la alerta
   * @param message Mensaje a mostrar
   */
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  /**
   * Método principal de navegación y autenticación
   * - Valida credenciales
   * - Redirecciona según tipo de usuario
   * - Maneja errores de autenticación
   */
  navegar() {
    try {
      // Configuración de datos para navegación
      let setData: NavigationExtras = {
        state: {
          id: this.usuario.value.user,
          pass: this.usuario.value.pass
        }
      };

      // Mapa de rutas según credenciales
      const loginMap: { [key: string]: string } = {
        'prof:1234': '/cursosprofesor',
        'prof2:1234': '/cursosprofesor',
        'prof3:1234': '/cursosprofesor',
        'estu:1234': '/cursosalumno',
        'estu2:1234': '/cursosalumno',
        'estu3:1234': '/cursosalumno'
      };

      // Validación y redirección
      const userPassKey = `${this.usuario.value.user}:${this.usuario.value.pass}`;
      if (loginMap[userPassKey]) {
        this.authservice.login();
        this.router.navigate([loginMap[userPassKey]], setData);
      } else {
        this.validar = false;
        this.presentAlert('Error', 'Usuario o contraseña incorrecta');
      }
    } catch (error: any) {
      console.error('Error en login:', error);
      this.presentAlert('Error', 'Ocurrió un error al intentar iniciar sesión');
    }
  }
}
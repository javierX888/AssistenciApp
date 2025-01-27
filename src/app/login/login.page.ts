import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConsumoAPIService } from '../services/consumo-api.service';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LoginPage implements OnInit {

  usuario = new FormGroup({
    user: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private consumoAPI: ConsumoAPIService,
    private authService: AuthserviceService
  ) {}

  ngOnInit() {}

  navegar() {
    const username = this.usuario.value.user!;
    const password = this.usuario.value.pass!;

    // Llamamos la API Flask /login
    this.consumoAPI.loginApi(username, password).subscribe({
      next: (resp: any) => {
        // Retorna: { id, user, nombre, correo, tipoPerfil } si es correcto
        console.log('Login response:', resp);

        // Marcamos como logueado
        this.authService.login();

        // Si es tipoPerfil=1 => profesor
        if (resp.tipoPerfil === 1) {
          this.authService.setUserRole('profesor');

          // Pasamos el ID y nombre del profesor a la siguiente página
          const navExtras: NavigationExtras = {
            state: {
              profesorId: resp.id, 
              nombreProfesor: resp.nombre 
            }
          };
          this.router.navigate(['/curso-lista-profesor'], navExtras);

        // Si es tipoPerfil=2 => alumno
        } else if (resp.tipoPerfil === 2) {
          this.authService.setUserRole('alumno');

        //Pasamos ID y onmbre del alumno a la siguiente página
          const navExtras:NavigationExtras={
            state:{
              alumnoId:resp.id,
              nombreAlumno:resp.nombre
            }
          };
          
          // Ejemplo sin state:
          this.router.navigate(['/curso-lista-alumno'], navExtras);
        } else {
          console.warn('Perfil desconocido:', resp);
        }
      },
      error: (err) => {
        console.error('Error de login', err);
        // Manejar credenciales inválidas (ej: alert)
      }
    });
  }
}
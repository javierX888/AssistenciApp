import { Component, Inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
<<<<<<< Updated upstream
import { Router,NavigationExtras, RouterModule } from '@angular/router';
import { FormControl,FormGroup,Validators ,ReactiveFormsModule  } from '@angular/forms';
=======
import { Router, RouterModule, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConsumoAPIService } from '../services/consumo-api.service';
import { AuthserviceService } from '../services/authservice.service';
import { AlertController } from '@ionic/angular';
>>>>>>> Stashed changes

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
<<<<<<< Updated upstream
  imports: [IonicModule,RouterModule,ReactiveFormsModule]
=======
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule    
  ]
  
>>>>>>> Stashed changes
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }
  
  validar:boolean= true;

  usuario = new FormGroup({

    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),

    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),

  });
  
  

<<<<<<< Updated upstream
=======
  constructor(
    private router: Router,
    private consumoAPI: ConsumoAPIService,
    private authService: AuthserviceService,
    @Inject(AlertController) private alertController: AlertController
  ) {}
>>>>>>> Stashed changes


<<<<<<< Updated upstream
  navegar(){
   let setData: NavigationExtras = {
    state: {
      id: this.usuario.value.user,
      pass: this.usuario.value.pass
      }

    };

   const loginMap: { [key: string]: string } = {
     'prof:1234': '/cursosprofesor',
     'prof2:1234': '/cursosprofesor',
     'prof3:1234': '/cursosprofesor',
     'estu:1234': '/cursosalumno',
     'estu2:1234': '/cursosalumno',
     'estu3:1234': '/cursosalumno',
     };

   const userPassKey = `${this.usuario.value.user}:${this.usuario.value.pass}`;
     if (loginMap[userPassKey]) {
       this.router.navigate([loginMap[userPassKey]], setData);
       } else {
       this.validar=false
       console.log (this.router.getCurrentNavigation()?.extras.state?.[userPassKey]);
       }

 

     }    

  

  ngOnInit() {
  }

}
=======
  async mostrarAlertaCredencialesInvalidas() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Credenciales incorrectas. Intente nuevamente.',
      buttons: ['OK']
    });
    await alert.present();
  }

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
          this.mostrarAlertaCredencialesInvalidas(); // Llama la funcion de alerta
        }  
      
      })
    };
  }
>>>>>>> Stashed changes

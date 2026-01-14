import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ConsumoAPIService } from '../services/consumo-api.service';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, FormsModule]
})
export class CrearcuentaPage implements OnInit {

  nombre: string = "";
  userInput: string = "";
  passInput: string = "";
  confirmPassInput: string = "";
  emailInput: string = "";

  constructor(
    private router: Router,
    private consumoAPI: ConsumoAPIService,
    private alertController: AlertController
  ) {
    this.nombre = this.router.getCurrentNavigation()?.extras.state?.["nombre"];
  }

  ngOnInit() {
  }

  async crearCuenta() {
    if (!this.userInput || !this.passInput || !this.emailInput) {
      this.mostrarAlerta('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (this.passInput !== this.confirmPassInput) {
      this.mostrarAlerta('Error', 'Las contraseñas no coinciden');
      return;
    }

    this.consumoAPI.registerApi(this.userInput, this.passInput, this.emailInput).subscribe({
      next: async (resp) => {
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Cuenta creada correctamente',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.router.navigate(['/login']);
            }
          }]
        });
        await alert.present();
      },
      error: (err) => {
        this.mostrarAlerta('Error', err.error?.message || 'No se pudo crear la cuenta');
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

}
;
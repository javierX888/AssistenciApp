import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
  standalone:true,
  imports:[IonicModule,RouterModule]
})
export class CrearcuentaPage implements OnInit {

  nombre:string="";

  constructor(private router:Router) {
    this.nombre =this.router.getCurrentNavigation()?.extras.state?.["nombre"];
   }

  ngOnInit() {
  }

}
;
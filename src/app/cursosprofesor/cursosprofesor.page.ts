import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cursosprofesor',
  templateUrl: './cursosprofesor.page.html',
  styleUrls: ['./cursosprofesor.page.scss'],
  imports: [IonicModule],
  standalone:true
})
export class CursosprofesorPage implements OnInit {

  nombre:string="";

   constructor(private router:Router) {
       this.nombre =this.router.getCurrentNavigation()?.extras.state?.["nombre"];
      }
  ngOnInit() {
  }

}

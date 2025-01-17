import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cursosalumno',
  templateUrl: './cursosalumno.page.html',
  styleUrls: ['./cursosalumno.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterModule]
})
export class CursosalumnoPage implements OnInit {

  nombre:string="";

 
   constructor(private router:Router) {
     this.nombre =this.router.getCurrentNavigation()?.extras.state?.["id"];
    }
  ngOnInit() {
  }

}

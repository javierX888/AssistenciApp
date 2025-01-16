import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router,NavigationExtras, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterModule]
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }
  
  validar:boolean= true;

  navegar(){
    console.log("ingresamos al metodo");

    let setData : NavigationExtras={
      state: {
        nombre:"Yan",
        apellido: "Pux"
      }
    };

    if(this.validar){
      this.router.navigate(["/cursosalumno"],setData);
    }else{
      this.router.navigate(["/cursosprofesor"],setData);
    }
  }

  ngOnInit() {
  }

}

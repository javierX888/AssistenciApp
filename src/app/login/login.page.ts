import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router,NavigationExtras, RouterModule } from '@angular/router';
import { FormControl,FormGroup,Validators ,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterModule,ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }
  
  validar:boolean= true;

  usuario = new FormGroup({

    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),

    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),

  });



  navegar(){
   let setData: NavigationExtras = {
    state: {
      id: this.usuario.value.user,
      pass: this.usuario.value.pass
      }

    };

   const loginMap: { [key: string]: string } = {
     'prof:1234': '/cursosprofesor',
     'estu:1234': '/cursosalumno'
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

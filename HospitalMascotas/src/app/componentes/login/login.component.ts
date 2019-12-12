import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status:boolean;
  msj:string='';

  constructor(private router: Router, private loginService: LoginService) {

  }
  
  ngOnInit(){
    this.status=false;
    this.logout();
  }

  setStatus(s:boolean){
    this.status=s;
  }

  login(form:NgForm){
    if (!form.valid){
      this.msj = "Formulario invalido.";
      return;
    }
    this.loginService.login(form.value.lemail, form.value.lpass).pipe(first())
    .subscribe(
        data => {
            this.setStatus(true);
            this.router.navigate(['/board']);
        },
        error => {
            this.setStatus(false);
            this.msj = 'Nombre de usuario o Contraseña incorrectas';
        });
     
  }

  getTokenData(){
    return this.loginService.currentUserValue;
  }

  getUserEmail(){
    return this.getTokenData().getEmail();
  }

  getUserRol(){
    return this.getTokenData().getRol();
  }

  logout(){
    this.loginService.logout();
  }

}

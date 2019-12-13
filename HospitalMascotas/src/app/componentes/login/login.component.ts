import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { first } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msj:string='';
  logged:boolean=this.sesionService.getLogged();

  constructor(private router: Router, private loginService: LoginService, private localStorage:LocalStorageService, private sesionService: SessionService) {

  }
  
  ngOnInit(){
  }

  login(form:NgForm){
    if (!form.valid){
      this.msj = "Formulario invalido.";
      return;
    }
    this.loginService.login(form.value.lemail, form.value.lpass).pipe(first())
    .subscribe(
        data => {
            this.logged = this.sesionService.getLogged();
            this.router.navigate(['/board']);
        },
        error => {
            this.logged = this.sesionService.getLogged();
            this.msj = 'Nombre de usuario o Contraseña incorrectas';
        });
  }

  getToken(){
    if (!this.sesionService.getLogged())
      return;
    return this.localStorage.getToken();
  }

  getEmail(){
    if (!this.sesionService.getLogged())
      return;
    return this.localStorage.getEmail();
  }

  getRol(){
    console.log("Rol: "+this.localStorage.getRol());
    if (!this.sesionService.getLogged())
      return;
    return this.localStorage.getRol();
  }

  getId(){
    if (!this.sesionService.getLogged())
      return;
    return this.localStorage.getId();
  }

  getExp(){
    if (!this.sesionService.getLogged())
      return;
    return this.localStorage.getExp();
  }

  logout(){
    this.loginService.logout();
    this.logged = this.sesionService.getLogged();
    this.router.navigate(['/index']);
  }

}

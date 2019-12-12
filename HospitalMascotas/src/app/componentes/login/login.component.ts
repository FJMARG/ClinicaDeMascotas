import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { first } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged:boolean=false;
  msj:string='';

  constructor(private router: Router, private loginService: LoginService, private localStorage:LocalStorageService) {

  }
  
  ngOnInit(){
    this.logout();
  }

  setLogged(l:boolean){
    this.logged=l;
  }

  login(form:NgForm){
    if (!form.valid){
      this.msj = "Formulario invalido.";
      return;
    }
    this.loginService.login(form.value.lemail, form.value.lpass).pipe(first())
    .subscribe(
        data => {
            this.setLogged(true);
            this.router.navigate(['/board']);
        },
        error => {
            this.setLogged(false);
            this.msj = 'Nombre de usuario o Contraseña incorrectas';
        });
     
  }

  getToken(){
    if (!this.logged)
      return;
    return this.localStorage.getToken();
  }

  getEmail(){
    if (!this.logged)
      return;
    return this.localStorage.getEmail();
  }

  getRol(){
    console.log("Rol: "+this.localStorage.getRol());
    if (!this.logged)
      return;
    return this.localStorage.getRol();
  }

  getId(){
    if (!this.logged)
      return;
    return this.localStorage.getId();
  }

  getExp(){
    if (!this.logged)
      return;
    return this.localStorage.getExp();
  }

  logout(){
    this.loginService.logout();
  }

}

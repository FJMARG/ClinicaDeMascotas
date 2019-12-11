import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status:boolean;
  msj:String='';

  constructor(private router: Router, private loginService) {

  }
  
  ngOnInit(){
    this.status=false;
  }

  setStatus(s:boolean){
    this.status=s;
  }

  login(form:NgForm){
    if (!form.valid){
      this.msj = "Formulario invalido.";
      return;
    }
    if (!this.loginService.verificar(form.value.lemail, form.value.lpass)){
      this.msj = "Email o contraseña incorrectos.";
      return;
    }
    this.setStatus(true);
    this.router.navigate(['/board']);
  }
}

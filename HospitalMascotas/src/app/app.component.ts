import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Clinica de Mascotas';
  logged:boolean;

  ngOnInit(){
    this.logged=false;
  }

  setLogged(log:boolean){
    this.logged=log;
  }

  /*login(form:NgForm){
    if (!form.valid)
      return false;
    let loginService = new LoginService();
    if (!loginService.verificar(form.value.lemail, form.value.lpass))
      return false;
    this.setLogged(true);
    return true;
  }*/

}

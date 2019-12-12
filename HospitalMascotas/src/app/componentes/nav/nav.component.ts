import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements AfterViewInit {

  title = 'Clinica de Mascotas';
  logged:boolean=true;

  @ViewChild(LoginComponent,{static: false}) login;

  constructor() { }

  ngAfterViewInit(){
    this.logged = this.login.status;
  }

}

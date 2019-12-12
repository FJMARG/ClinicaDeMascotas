import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements AfterViewInit {

  title = 'Clinica de Mascotas';
  logged:boolean;
  dueno:boolean;
  vet:boolean;
  admin:boolean;

  @ViewChild(LoginComponent,{static: false}) login: { status: boolean; };


  constructor() { }

  ngOnInit(){
    this.dueno = false;
    this.vet = true;
    this.admin = false;
  }

  ngAfterViewInit(){
    this.logged = this.login.status;
  }

}

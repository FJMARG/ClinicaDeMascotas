import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit,AfterViewInit {

  title = 'Clinica de Mascotas';
  logged:boolean;

  @ViewChild(LoginComponent,{static: false}) child;

  constructor() { }

  ngOnInit(){
  }

  ngAfterViewInit(){
    this.logged = this.child.status;
  }

}

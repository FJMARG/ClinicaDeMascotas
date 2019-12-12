import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit,AfterViewInit {

  title = 'Clinica de Mascotas';
  logged:boolean;
  dueno:boolean;
  vet:boolean;
  admin:boolean;

  @ViewChild(LoginComponent,{static: false}) child;


  constructor() { }

  ngOnInit(){
    this.dueno = false;
    this.vet = true;
    this.admin = false;
  }

  ngAfterViewInit(){
    this.logged = this.child.status;
  }

}

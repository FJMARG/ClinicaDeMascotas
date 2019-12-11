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

  @ViewChild(LoginComponent,{static: false}) login;
  @ViewChild(BoardComponent,{static: false}) board;


  constructor() { }

  ngOnInit(){
  }

  ngAfterViewInit(){
    this.logged = this.login.status;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  dueno:boolean;
  admin:boolean;
  vet:boolean;

  constructor() { }

  ngOnInit() {
    this.dueno = false;
    this.vet = true;
    this.admin = false;
    /**
     * Aca se pondria en true el rol del usuario logueado
     */
  }

}

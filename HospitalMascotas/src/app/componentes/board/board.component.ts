import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';
import { MascotasService } from 'src/app/servicios/mascotas-service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  mascotas: Mascota[];

  constructor() { }

  ngOnInit() {
    this.mascotas = MascotasService;
  }

}

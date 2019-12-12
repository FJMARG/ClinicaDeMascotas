import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  mascotas:any;

  constructor(private mascotasService: MascotasService, private localStorage:LocalStorageService) { }

  ngOnInit() {
    this.getMascotasDueno();
  }

  getMascotasDueno(){
    let d = this.localStorage.getId();
    let obs = this.mascotasService.getMascotasDueno(d);
    obs.subscribe(mascotas => { // espera los datos en formato JSON
        this.mascotas = mascotas;
      });
    console.log(this.mascotas);
    return this.mascotas;
  }

}

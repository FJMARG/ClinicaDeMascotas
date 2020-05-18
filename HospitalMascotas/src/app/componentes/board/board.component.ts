import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  msj:any;
  mascotas:any;

  constructor(private mascotasService: MascotasService, private localStorage:LocalStorageService, private sesionService:SessionService) { }

  ngOnInit() {
    this.generateBoard();
    this.redirect();
  }

  generateBoard(){
    let rol = this.localStorage.getRol();
    if (rol == "DUENO"){
      this.getMascotasDueno();
    }
    else {
      let valido = this.localStorage.getVeterinarioValido();
      if (valido){
        console.log("Entro valido");
        this.getMascotas();
      }
      else if(rol != "ADMINISTRADOR"){
        console.log("Entro msj");
        this.msj = "No podra utilizar su cuenta hasta que no sea validado por un administrador.";
      }
    }
  }

  getMascotasDueno(){
    let d = this.localStorage.getId();
    if(d){  
      let obs = this.mascotasService.getMascotasDueno(d);
      obs.subscribe(mas => {
        this.mascotas = mas;
      }); 
      return this.mascotas;
    }
    return null;
  }

  getMascotas(){
    let obs = this.mascotasService.getMascotas();
    obs.subscribe(mas => {
      this.mascotas = mas;
    });
    return this.mascotas;
  }

  getLogged(){
    return this.sesionService.getLogged();
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}

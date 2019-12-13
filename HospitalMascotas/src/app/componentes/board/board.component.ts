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

  mascotas:any;

  constructor(private mascotasService: MascotasService, private localStorage:LocalStorageService, private sesionService:SessionService) { }

  ngOnInit() {
    this.getMascotasDueno();
    this.redirect();
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

  getLogged(){
    return this.sesionService.getLogged();
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}

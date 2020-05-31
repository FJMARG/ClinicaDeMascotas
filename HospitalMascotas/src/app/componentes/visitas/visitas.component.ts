import { Component, OnInit } from '@angular/core';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SessionService } from 'src/app/servicios/session.service';
import { RegistroVisitaService } from 'src/app/servicios/registro-visita.service';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {

  msj:any;
  visitas:any;

  constructor(private localStorage:LocalStorageService, private sesionService:SessionService, private visitasService: RegistroVisitaService) { }

  ngOnInit() {
    this.redirect();
    this.getVisitas();
  }

  getVisitas(){
    let obs = this.visitasService.getVisitas();
    obs.subscribe(v => {
      this.visitas = v;
      console.log(v);
    }); 
    return this.visitas;
  }

  getLogged(){
    return this.sesionService.getLogged();
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }


}

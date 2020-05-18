import { Component, OnInit } from '@angular/core';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SessionService } from 'src/app/servicios/session.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asignar-veterinario',
  templateUrl: './asignar-veterinario.component.html',
  styleUrls: ['./asignar-veterinario.component.css']
})
export class AsignarVeterinarioComponent implements OnInit {

  mascotas:any;

  constructor(private usuarioService: UsuarioService, private mascotasService: MascotasService, private localStorage:LocalStorageService, private sesionService:SessionService) { }

  ngOnInit() {
    this.redirect();
    this.cargarDatos();
  }

  cargarDatos(){
    let d = this.localStorage.getId();
    if(d){  
      let obs = this.mascotasService.getMascotasDueno(d);
      obs.subscribe(mas => {
        this.mascotas = mas;
      }); 
    }
  }

  getLogged(){
    return this.sesionService.getLogged();
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SessionService } from 'src/app/servicios/session.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aceptarmascota',
  templateUrl: './aceptarmascota.component.html',
  styleUrls: ['./aceptarmascota.component.css']
})
export class AceptarmascotaComponent implements OnInit {

  idvet:any
  mascotas:any;
  status:any;
  classstatus:any;
  ids:string[] = [];

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService, private mascotasService: MascotasService, private localStorage:LocalStorageService, private sesionService:SessionService) { }

  ngOnInit() {
    this.redirect();
    this.cargarDatos();
  }

  seleccionar(mid:string){
    if (!this.ids.includes(mid))
      this.ids.push(mid);
    else
      this.ids = this.ids.filter(e => e != mid);
  }

  aceptarMascota(form:NgForm){
      if(form.valid){
        if(this.ids){
          this.usuarioService.putAceptarMascotas(this.ids, this.idvet).subscribe();
          this.status = "Se acepto la/s mascota/s correctamente.";
          this.classstatus = "alert-success";
          self.location.reload();
        }
        else {
          this.status = "Debe seleccionar al menos una opcion.";
          this.classstatus = "alert-warning";
        }
      }
  }

  cargarDatos(){
    this.idvet = this.localStorage.getId()
    let obs = this.usuarioService.getMascotasPendientes(this.idvet);
    obs.subscribe(m => {
      this.mascotas = m;
      console.log(m);
    });
  }

  getLogged(){
    return this.sesionService.getLogged();
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}
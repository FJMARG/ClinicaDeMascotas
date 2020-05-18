import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { SessionService } from 'src/app/servicios/session.service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent implements OnInit {

  mascota:any;
  id:any;

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService, private mascotaService: MascotasService, private sesionService:SessionService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.redirect();
    this.cargarMascota();
  }

  cargarMascota(){ 
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
    if (this.id){
      let obs = this.mascotaService.getMascota(this.id);
      obs.subscribe(m => {
        this.mascota = m;
      });
      return this.mascota;
    }
    return null;
  }

  eliminarMascota(form:NgForm){  
    if(form.valid){
      this.mascotaService.deleteMascota(this.id).subscribe();
      this.sesionService.forceRedirect("/gestionarmascotas");
    }
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}

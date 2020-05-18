import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SessionService } from 'src/app/servicios/session.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignar-amascota',
  templateUrl: './asignar-amascota.component.html',
  styleUrls: ['./asignar-amascota.component.css']
})
export class AsignarAMascotaComponent implements OnInit {

  selected:any;
  veterinarios:any;
  status:any;
  classstatus:any;
  id:any;

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService, private mascotasService: MascotasService, private localStorage:LocalStorageService, private sesionService:SessionService) { }

  ngOnInit() {
    this.redirect();
    this.cargarDatos();
  }

  onSubmit(form:NgForm){
      if(form.valid){
        let idvet = form.value.veterinario;
        if(this.selected != idvet){
          console.log(idvet);
          this.mascotasService.putMascotaVeterinario(this.id, idvet).subscribe();
          this.status = "Se asigno el veterinario correctamente.";
          this.classstatus = "alert-success";
        }
        else {
          this.status = "El veterinario que deseas asignar ya esta asignado a su mascota.";
          this.classstatus = "alert-warning";
        }
      }
  }

  cargarDatos(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
    let obs = this.usuarioService.getVeterinariosValidos();
    obs.subscribe(v => {
      this.veterinarios = v;
    });
    let obs2 = this.mascotasService.getMascota(this.id);
    obs2.subscribe(m => {
      if (m.veterinario != null)
        this.selected = m.veterinario.id;
    });
  }

  getLogged(){
    return this.sesionService.getLogged();
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }


}

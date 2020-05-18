import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { SessionService } from 'src/app/servicios/session.service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-visita-veterinario',
  templateUrl: './visita-veterinario.component.html',
  styleUrls: ['./visita-veterinario.component.css']
})
export class VisitaVeterinarioComponent implements OnInit {

  mascotas:any;
  status:any;
  classstatus:any;

  constructor(private usuarioService: UsuarioService, private mascotaService: MascotasService, private sesionService:SessionService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.redirect();
    this.cargarMascotasAsignadas();
  }

  cargarMascotasAsignadas(){
    let id = this.localStorageService.getId();
    this.usuarioService.getMascotasAsignadas(id).subscribe( mas => {
      console.log(mas);
      this.mascotas = mas;
    });
  }

  registrar(form:NgForm){  
    if (form.valid){
      let v = {
        "fecha":form.value.fecha,
        "descripcion":null,
        "diagnostico":form.value.diagnostico,
        "peso":form.value.peso,
        "indicaciones":form.value.indicaciones,
        "droga":null,
        "motivoVisita":form.value.motivo
      }
      let id = this.localStorageService.getId();
      let mascotaid = form.value.mascota;
      this.usuarioService.postVisitaVeterinarioPor(v, id, mascotaid).subscribe(visita=>v);
      this.status='El registro de visita fue registrado correctamente.';
      this.classstatus='alert-success'; 
    }
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}

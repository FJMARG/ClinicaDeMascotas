import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { SessionService } from 'src/app/servicios/session.service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { NgForm } from '@angular/forms';
import { formatNumber } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

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

  validar(form:NgForm){
    if(!form.valid)
      return false;
    if(!(form.value.fecha && form.value.diagnostico && form.value.peso && form.value.indicaciones))
      return false;
    return true;
  }

  registrar(form:NgForm){  
    if (this.validar(form)){
      let v = {
        "fecha":form.value.fecha,
        "descripcion":null,
        "diagnostico":form.value.diagnostico,
        "peso":form.value.peso,
        "indicaciones":form.value.indicaciones,
        "droga":null,
        "motivoVisita":"VISITA"
      }
      let id = this.localStorageService.getId();
      let mascotaid = form.value.mascota;
      this.status='El registro de visita fue registrado correctamente.';
      this.classstatus='alert-success';
      this.usuarioService.postVisitaVeterinarioPor(v, id, mascotaid).subscribe(visita=>v, (err:HttpErrorResponse) => {
        console.log("El error es: "+err.status);
        if(err.status == 409){
          this.status="Usuario no existe en el sistema o mascota ya esta registrada.";
          this.classstatus="alert-danger";
        }
        else if(err.status == 404){
          this.status="Usuario o mascota no existe en el sistema.";
          this.classstatus="alert-danger";
        }
        else if(err.status == 403){
          this.status="No es posible realizar esta accion.";
          this.classstatus="alert-danger";
        }
        else{
          this.status="Error desconocido.";
          this.classstatus="alert-danger";
        }
      });
      window.scroll(0,0);
    }
    else{
      this.status='Formulario invalido.';
      this.classstatus='alert-danger'; 
    }
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}

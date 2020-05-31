import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { SessionService } from 'src/app/servicios/session.service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-vei',
  templateUrl: './vei.component.html',
  styleUrls: ['./vei.component.css']
})
export class VeiComponent implements OnInit {

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
    if(!(form.value.fecha && form.value.descripcion && form.value.motivo))
      return false;
    return true;
  }

  registrar(form:NgForm){  
    if (this.validar(form)){
      let v = {
        "fecha":form.value.fecha,
        "descripcion":form.value.descripcion,
        "diagnostico":null,
        "peso":null,
        "indicaciones":null,
        "droga":null,
        "motivoVisita":form.value.motivo
      }
      let id = this.localStorageService.getId();
      let mascotaid = form.value.mascota;
      this.status='El registro fue dado de alta correctamente.';
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

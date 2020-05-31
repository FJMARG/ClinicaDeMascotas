import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { SessionService } from 'src/app/servicios/session.service';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { NgForm } from '@angular/forms';
import { Recordatorio } from 'src/app/modelos/recordatorio';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-agregar-recordatorio',
  templateUrl: './agregar-recordatorio.component.html',
  styleUrls: ['./agregar-recordatorio.component.css']
})
export class AgregarRecordatorioComponent implements OnInit {

  recordatorios:any;
  mascotas:any;
  status:any;
  classstatus:any;

  constructor(private usuarioService: UsuarioService, private mascotaService: MascotasService, private sesionService:SessionService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.redirect();
    this.cargarMascotas();
  }

  cargarMascotas(){ 
    let obs = this.mascotaService.getMascotasDueno(this.localStorageService.getId());
    obs.subscribe(mas => {
      this.mascotas = mas;
    }); 
    //return this.mascotas;
  }

  validar(form:NgForm){
    if(!form.valid)
      return false;
    if(!(form.value.descripcion))
      return false;
    return true;
  }

  agregarRecordatorio(form:NgForm){  
    if (this.validar(form)){
      let r = new Recordatorio();
      r.setDescripcion(form.value.descripcion);
      r.setFecha(new Date());
      let id = this.localStorageService.getId();
      let mascotaid = form.value.mascotaid;
      this.status='El recordatorio fue registrado correctamente.';
      this.classstatus='alert-success'; 
      this.usuarioService.postRecordatorioPara(r, id, mascotaid).subscribe(recordatorio=>r, (err:HttpErrorResponse) => {
        console.log("El error es: "+err.status);
        if(err.status == 409){
          this.status="Mascota o usuario inexistente en el sistema.";
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

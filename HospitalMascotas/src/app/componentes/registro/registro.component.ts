import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/modelos/usuario';
import { RegistroService } from 'src/app/servicios/registro.service';
import { Clinica } from 'src/app/modelos/clinica';
import { ConfigFichaPublica } from 'src/app/modelos/config-ficha-publica';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  selected:string='DUENO';
  status:string;
  classstatus:string;
  
  /*formValue = {
    tipo: 'v',
    nombre: ''
  }

  formValueVete = {
    tipo: 'v',
    nombre: ''
  }*/

  constructor(private registroService: RegistroService) { }

  ngOnInit() {

  }

  validar(form:NgForm){
    if (!form.valid)
      return false;
    if (form.value.email != form.value.cEmail)
      return false;
    if (form.value.password != form.value.confirm)
      return false;
    if(!(form.value.email && form.value.cEmail && form.value.password && form.value.confirm && form.value.nombre && form.value.apellido && form.value.telefono))
      return false;
    return true;
    }
    
    onSubmit(form:NgForm){
      if (this.validar(form)){
      let u = new Usuario();
      u.setRolUsuario(form.value.cuenta);
      if (u.getRolUsuario() == 'VETERINARIO'){
        let clinica = new Clinica();
        clinica.setNombre(form.value.consultorio);
        clinica.setDireccion(form.value.consultorio);
        u.setClinica(clinica);
      }
      else{
        u.setClinica(null);
      }
      u.setApellido(form.value.apellido);
      u.setEmail(form.value.email);
      u.setNombre(form.value.nombre);
      u.setPassword(form.value.password);
      u.setTelefono(form.value.telefono);
      let ficha= new ConfigFichaPublica();
      ficha.setNombreDueno(false);
      ficha.setNombreMascota(false);
      ficha.setFechaNacimientoMascota(false);
      ficha.setEspecieMascota(false);
      ficha.setRazaMascota(false);
      ficha.setSexoMascota(false);
      ficha.setColorMascota(false);
      ficha.setSenasMascota(false);
      ficha.setFotoMascota(false);
      if (form.value.publicApe){
        ficha.setApellidoDueno(true);
      }
      else{
        ficha.setApellidoDueno(false);
      }
      if(form.value.publicEmail){
        ficha.setEmailDueno(true);
      }
      else{
        ficha.setEmailDueno(false);
      }
      if (form.value.publicTel){
        ficha.setTelefonoDueno(true);
      }
      else{
        ficha.setTelefonoDueno(false);
      }
      u.setFichaPublica(ficha);
      this.status="Registro satisfactorio.";
      this.classstatus="alert-success";
      this.registroService.crearUsuario(u).subscribe(user => u, (err:HttpErrorResponse) => {
        console.log("El error es: "+err.status);
        if(err.status == 409){
          this.status="El email ya esta registrado en el sistema.";
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
      this.status="Datos de formulario no se pudieron validar.";
      this.classstatus="alert-danger";
    }
  }

}

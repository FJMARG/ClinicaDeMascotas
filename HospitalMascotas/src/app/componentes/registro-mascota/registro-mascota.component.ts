import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mascota } from 'src/app/modelos/mascota';
import { RegistroService } from 'src/app/servicios/registro.service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { RegistroMascotaService } from 'src/app/servicios/registro-mascotas-service';
import { SessionService } from 'src/app/servicios/session.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro-mascota',
  templateUrl: './registro-mascota.component.html',
  styleUrls: ['./registro-mascota.component.css']
})
export class RegistroMascotaComponent implements OnInit {
  
  selected:string='M';
  veterinarios:any;
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

  constructor(private registroService: RegistroService, private registroMascotaService: RegistroMascotaService, private localStorage:LocalStorageService, private sesion:SessionService) { }

  ngOnInit() {
    this.sesion.redirectTo("/index");
    /*const request = {
      ...this.formValue,
      ...this.formValueVete
    }
    this.veterinarios = this.getVeterinarios();*/
  }

  /*getVeterinarios(){
    let usuarios:any;
    let veterinarios:Array<Usuario> = [];
    let obs = this.RegistroMascotaService.getUsuarios();
    obs.subscribe(mascotas => { // espera los datos en formato JSON
      usuarios = mascotas;
    });;
    usuarios.forEach(usuario => {
      if (usuario.getRolUsuario == 'VETERINARIO') {
        veterinarios.push(usuario);
      }
    });
    return veterinarios;
  }

  getVeterinario(vet: string){
    let usuarios:any;
    let veterinarios:Array<Usuario> = [];
    let obs = this.RegistroMascotaService.getUsuarios();
    obs.subscribe(u => { // espera los datos en formato JSON
      usuarios = u;
    });;
    usuarios.forEach(usuario => {
      if (usuario.getRolUsuario == 'VETERINARIO') {
        veterinarios.push(usuario);
      }
    });
    veterinarios.forEach(veterinario => {
      if (veterinario.getNombre() == vet) {
        return veterinario;
      }
    });
    return null;

    let veterinarios = this.getVeterinarios();
    veterinarios.forEach(veterinario => {
      if (veterinario.getNombre() == vet) {
        return veterinario;
      }
    });
    return null;
  }*/

  validar(form:NgForm){
    if (!form.valid)
      return false;
    if(!(form.value.nombre && form.value.sexo && form.value.fechaNacimiento && form.value.especie && form.value.raza && form.value.color && form.value.senas))
      return false;
    let f = new Date();
    let formF = new Date(form.value.fechaNacimiento);
    if (formF > f)
      return false;
    return true;
  }

  onSubmit(form:NgForm){
    if (this.validar(form)){
      let m = new Mascota();
      /*let veterinario = this.getVeterinario(form.value.veterinario);
      m.setVeterinario(veterinario);
      
      if (u.getRolUsuario() == 'VETERINARIO'){
        let clinica = new Clinica();
        clinica.setNombre(form.value.consultorio);
        clinica.setDireccion(form.value.consultorio);
        u.setClinica(clinica);
      }
      else{
        u.setClinica(null);
      }*/
      m.setVeterinario = null;
      m.setNombre(form.value.nombre);
      m.setSexo(form.value.sexo);
      m.setFechaNacimiento(form.value.fechaNacimiento);
      m.setEspecie(form.value.especie);
      m.setRaza(form.value.raza);
      m.setColor(form.value.color);
      m.setSenas(form.value.senas);
      m.setFoto(form.value.foto);
      let d = this.localStorage.getId();
      console.log("Id del dueño:"+d);
      this.status='La mascota fue registrada correctamente.';
      this.classstatus='alert-success'; 
      this.registroMascotaService.crearMascota(m, d).subscribe(mascota=>m, (err:HttpErrorResponse) => {
        console.log("El error es: "+err.status);
        if(err.status == 409){
          this.status="Usuario no existe en el sistema o mascota ya esta registrada.";
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
      this.status='Formulario invalido. ¿Fecha futura? ¿Campos vacios?';
      this.classstatus='alert-danger'; 
    }
}

}
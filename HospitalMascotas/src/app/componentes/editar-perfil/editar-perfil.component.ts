import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario';
import { Clinica } from 'src/app/modelos/clinica';
import { ConfigFichaPublica } from 'src/app/modelos/config-ficha-publica';
import { SessionService } from 'src/app/servicios/session.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  nombre:string;
  apellido:string;
  email:string;
  cemail:string;
  clinica:string;
  emailpublico:boolean;
  telefonopublico:boolean;
  apellidopublico:boolean;
  telefono:string;
  password:string;
  cpassword:string;
  classstatus:string;
  status:string;

  constructor(private localStorage:LocalStorageService, private uService:UsuarioService, private sesion: SessionService) { }

  ngOnInit() {
    this.sesion.redirectTo("/index");
    this.getDatos();
  }

  getDatos(){
    let id = this.localStorage.getId();
    if(id){  
      let obs = this.uService.getUsuario(id);
      obs.subscribe(udb => {
       this.nombre = udb.nombre;
        this.apellido=udb.apellido;
        this.email=udb.email;
        this.cemail=udb.email;
        if (udb.clinica){
          this.clinica=udb.clinica.nombre;
        }
        else {
          this.clinica = null;
        }
        let fichadb = udb.fichaPublica;
        this.telefonopublico = fichadb.telefonoDueno;
        this.apellidopublico = fichadb.apellidoDueno;
        this.emailpublico = fichadb.emailDueno;
        this.telefono=udb.telefono;
        this.password=udb.password;
        this.cpassword=udb.password;
      });  
    }
  }


  getRol(){
    return this.localStorage.getRol();
  }

  onSubmit(){
    if (this.nombre && this.apellido && this.email && this.cemail && this.telefono && this.password && this.cpassword){
      let us = new Usuario();
      us.setRolUsuario(this.getRol());
      if (us.getRolUsuario() == 'VETERINARIO'){
        let clinica = new Clinica();
        clinica.setNombre(this.clinica);
        clinica.setDireccion(this.clinica);
        us.setClinica(clinica);
      }
      else{
        us.setClinica(null);
      }
      us.setApellido(this.apellido);
      us.setEmail(this.email);
      us.setNombre(this.nombre);
      us.setPassword(this.password);
      us.setTelefono(this.telefono);
      let fic= new ConfigFichaPublica();
      fic.setNombreDueno(false);
      fic.setNombreMascota(false);
      fic.setFechaNacimientoMascota(false);
      fic.setEspecieMascota(false);
      fic.setRazaMascota(false);
      fic.setSexoMascota(false);
      fic.setColorMascota(false);
      fic.setSenasMascota(false);
      fic.setFotoMascota(false);
      if (this.apellidopublico){
        fic.setApellidoDueno(true);
      }
      else{
        fic.setApellidoDueno(false);
      }
      if(this.emailpublico){
        fic.setEmailDueno(true);
      }
      else{
        fic.setEmailDueno(false);
      }
      if (this.telefonopublico){
        fic.setTelefonoDueno(true);
      }
      else{
        fic.setTelefonoDueno(false);
      }
      us.setFichaPublica(fic);
      let id = this.localStorage.getId();
      this.status='Se modificaron los datos correctamente.';
      this.classstatus='alert-success';
      this.uService.putUsuario(us,id).subscribe(user=>us, (err:HttpErrorResponse) => {
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
      this.status="Datos de formulario no se pudieron validar";
      this.classstatus="alert-danger";
    }
  }
}

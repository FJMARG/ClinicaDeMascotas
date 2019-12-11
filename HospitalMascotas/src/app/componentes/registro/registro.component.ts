import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/modelos/usuario';
import { RegistroService } from 'src/app/servicios/registro.service';
import { Clinica } from 'src/app/modelos/clinica';
import { ConfigFichaPublica } from 'src/app/modelos/config-ficha-publica';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  selected:string='DUEÑO';
  hola:string='';
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
    /*const request = {
      ...this.formValue,
      ...this.formValueVete
    }*/
  }

  validar(form:NgForm){
    if (!form.valid)
      return false;
    if (form.value.email != form.value.cEmail)
      return false;
    if (form.value.password != form.value.confirm)
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
      ficha.setNombreDueño(false);
      ficha.setNombreMascota(false);
      ficha.setFechaNacimientoMascota(false);
      ficha.setEspecieMascota(false);
      ficha.setRazaMascota(false);
      ficha.setSexoMascota(false);
      ficha.setColorMascota(false);
      ficha.setSeñasMascota(false);
      ficha.setFotoMascota(false);
      ficha.setApellidoDueño(form.value.publicApe);
      ficha.setEmailDueño(form.value.publicEmail);
      ficha.setTelefonoDueño(form.value.publicTel);
      u.setFichaPublica(ficha);
      this.registroService.crearUsuario(u).subscribe(user=>u);
      this.status='Registro satisfactorio.';
      this.classstatus='alert-success'; 
      return true;
    }
    return false;
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mascota } from 'src/app/modelos/mascota';
import { RegistroService } from 'src/app/servicios/registro.service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { RegistroMascotaService } from 'src/app/servicios/registro-mascotas-service';
import { ConfigFichaPublica } from 'src/app/modelos/config-ficha-publica';

@Component({
  selector: 'app-registro-mascota',
  templateUrl: './registro-mascota.component.html',
  styleUrls: ['./registro-mascota.component.css']
})
export class RegistroMascotaComponent implements OnInit {
  
  selected:string='';
  veterinarios:any;
  
  /*formValue = {
    tipo: 'v',
    nombre: ''
  }

  formValueVete = {
    tipo: 'v',
    nombre: ''
  }*/

  constructor(private registroService: RegistroService, private RegistroMascotaService: RegistroMascotaService, private localStorage:LocalStorageService) { }

  ngOnInit() {
    /*const request = {
      ...this.formValue,
      ...this.formValueVete
    }*/
  }

  getVeterinarios(){
    let usuarios:any;
    let obs = this.RegistroMascotaService.getUsuarios();
    obs.subscribe(mascotas => { // espera los datos en formato JSON
      this.usuarios = mascotas;
    });;
  }

  validar(form:NgForm){
    if (!form.valid)
      return false;
    }
    
    onSubmit(form:NgForm){
      if (this.validar(form)){
      let m = new Mascota();
      let veterinario = 
      m.setVeterinario(veterinario);
      
      /*if (u.getRolUsuario() == 'VETERINARIO'){
        let clinica = new Clinica();
        clinica.setNombre(form.value.consultorio);
        clinica.setDireccion(form.value.consultorio);
        u.setClinica(clinica);
      }
      else{
        u.setClinica(null);
      }*/
      m.setNombre(form.value.nombre);
      m.setSexo(form.value.sexo);
      m.setFechaNacimiento(form.value.fechaNacimiento);
      m.setEspecie(form.value.especie);
      m.setRaza(form.value.raza);
      m.setColor(form.value.color);
      m.setSenas(form.value.senas);
      m.setFoto(form.value.foto);
      let d = this.localStorage.getId();
      this.RegistroMascotaService.crearMascota(m, d).subscribe(mascota=>m);
      this.status='Registro satisfactorio.';
      this.classstatus='alert-success'; 
      return true;
    }
    return false;
  }

}

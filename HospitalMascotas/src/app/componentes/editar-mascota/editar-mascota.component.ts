import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/servicios/registro.service';
import { RegistroMascotaService } from 'src/app/servicios/registro-mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SessionService } from 'src/app/servicios/session.service';
import { Mascota } from 'src/app/modelos/mascota';
import { ActivatedRoute } from '@angular/router';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {
  id:string;
  selected:string='';
  veterinarios:any;
  mascota:Mascota;
  status:string;
  classstatus:string;

  constructor(private route: ActivatedRoute, private mascotasService: MascotasService, private registroService: RegistroService, private registroMascotaService: RegistroMascotaService, private localStorage:LocalStorageService, private sesion:SessionService) { }
  
  ngOnInit() {
    this.redirect();
    this.getDatos();
  }

  redirect(){
    this.sesion.redirectTo("/index");
  }

  getDatos(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
    if(this.id){  
      this.mascota = new Mascota();
      let mdb = this.mascotasService.getMascota(this.id);
      mdb.subscribe(m => {
        this.mascota.setId(m.id);
        this.mascota.setColor(m.color);
        this.mascota.setDueno(m.dueno);
        this.mascota.setEspecie(m.especie);
        this.mascota.setFechaNacimiento(m.fechaNacimiento);
        this.mascota.setFoto(m.foto);
        this.mascota.setNombre(m.nombre);
        this.mascota.setRaza(m.raza);
        this.mascota.setSenas(m.senas);
        this.mascota.setSexo(m.sexo);
        this.mascota.setVeterinario(m.veterinario);
        this.mascota.setVisitas(m.visitas);
      });
    }
  }

  editarMascota(form:NgForm){
    if (form.valid){
      this.mascota.setColor(form.value.color);
      this.mascota.setSenas(form.value.senas);
      this.mascotasService.putMascota(this.mascota).subscribe();
      this.status='La mascota fue actualizada correctamente.';
      this.classstatus='alert-success'; 
    }
  }

}
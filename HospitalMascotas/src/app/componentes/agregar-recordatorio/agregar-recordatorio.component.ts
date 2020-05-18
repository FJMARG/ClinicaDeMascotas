import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { SessionService } from 'src/app/servicios/session.service';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { NgForm } from '@angular/forms';
import { Recordatorio } from 'src/app/modelos/recordatorio';

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

  agregarRecordatorio(form:NgForm){  
    if (form.valid){
      let r = new Recordatorio();
      r.setDescripcion(form.value.descripcion);
      r.setFecha(new Date());
      let id = this.localStorageService.getId();
      let mascotaid = form.value.mascotaid;
      this.usuarioService.postRecordatorioPara(r, id, mascotaid).subscribe(recordatorio=>r);
      this.status='El recordatorio fue registrado correctamente.';
      this.classstatus='alert-success'; 
    }
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}

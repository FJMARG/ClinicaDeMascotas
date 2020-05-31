import { Component, OnInit } from '@angular/core';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SessionService } from 'src/app/servicios/session.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buscar-mascotas',
  templateUrl: './buscar-mascotas.component.html',
  styleUrls: ['./buscar-mascotas.component.css']
})
export class BuscarMascotasComponent implements OnInit {

  mascotas:any;
  status:string;
  classstatus:string;

  constructor(private mascotasService: MascotasService, private localStorage:LocalStorageService, private sesionService:SessionService) { }

  ngOnInit() {
    this.getMascotas();
    this.redirect();
  }

  validar(form:NgForm){
    if (!form.valid)
      return false;
    return true;
  }

  onSubmit(form:NgForm){
    if(this.validar(form)){
      if(form.value.busqueda == '')
        this.getMascotas();
      else
        this.search(form.value.busqueda);
      this.status=null;
      this.classstatus=null;
    }
    else{
      this.status="Datos de formulario no se pudieron validar.";
      this.classstatus="alert-danger";
    }
  }

  search(term:string){
    console.log(term);
    let obs = this.mascotasService.getMascotasLike(term);
    obs.subscribe(m => {
      this.mascotas = m;
    });
    return this.mascotas;
  }

  getMascotas(){
    let obs = this.mascotasService.getMascotas();
    obs.subscribe(mas => {
      this.mascotas = mas;
    });
    return this.mascotas;
  }

  getLogged(){
    return this.sesionService.getLogged();
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { SessionService } from 'src/app/servicios/session.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validar-veterinario',
  templateUrl: './validar-veterinario.component.html',
  styleUrls: ['./validar-veterinario.component.css']
})
export class ValidarVeterinarioComponent implements OnInit {

  veterinarios:any;
  selected:any;
  status:any;
  classstatus:any;

  constructor(private usuarioService: UsuarioService, private sesionService:SessionService) { }

  ngOnInit() {
    this.redirect();
    this.getVeterinariosNoValidos();
  }

  getVeterinariosNoValidos(){  
    let obs = this.usuarioService.getVeterinariosNoValidos();
    obs.subscribe(vet => {
      this.veterinarios = vet;
    });
    return this.veterinarios;
  }

  actualizar(){
    this.selected = this.veterinarios.filter((v) => {
      return v.veterinarioValido;
    });
  }

  validarVeterinarios(form:NgForm){
    if(form.valid){
      if (this.selected){
        this.usuarioService.putVeterinarios(this.selected).subscribe(vets=>this.selected);
        self.location.reload();
      }
    }
  }

  redirect(){
    this.sesionService.redirectTo("/index");
  }

}
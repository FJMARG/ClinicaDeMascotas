import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-validar-veterinario',
  templateUrl: './validar-veterinario.component.html',
  styleUrls: ['./validar-veterinario.component.css']
})
export class ValidarVeterinarioComponent implements OnInit {

  veterinarios:any;

  constructor(private usuarioService: UsuarioService, private sesionService:SessionService) { }

  ngOnInit() {
    this.getMascotasDueno();
    this.redirect();
  }

  getMascotasDueno(){  
    let obs = this.usuarioService.getVeterinariosNoValidos();
    obs.subscribe(vet => {
      this.veterinarios = vet;
    });
    return this.veterinarios;
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}

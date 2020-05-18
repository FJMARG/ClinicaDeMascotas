import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/servicios/session.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrls: ['./recordatorios.component.css']
})
export class RecordatoriosComponent implements OnInit {

  recordatorios:any;

  constructor(private usuarioService: UsuarioService, private sesionService:SessionService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.getMisRecordatorios();
    this.redirect();
  }

  getMisRecordatorios(){  
    let obs = this.usuarioService.getRecordatoriosDe(this.localStorageService.getId());
    obs.subscribe(rec => {
      this.recordatorios = rec;
    });
    return this.recordatorios;
  }

  redirect(){
    this.sesionService.redirectTo("/index");  
  }

}

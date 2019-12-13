import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  mascotas:any;

  constructor(private router: Router,private mascotasService: MascotasService, private localStorage:LocalStorageService, private sesionService:SessionService) { }

  ngOnInit() {

  }

  getMascotasDueno(){
    let d = this.localStorage.getId();
    let obs = this.mascotasService.getMascotasDueno(d);
    obs.subscribe(mascotas => { // espera los datos en formato JSON
        this.mascotas = mascotas;
      });
    console.log(this.mascotas);
    return this.mascotas;
  }

  getLogged(){
    return this.sesionService.getLogged();
  }

  redirect(){
    if (!this.getLogged())
      this.router.navigate(['/index']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SessionService } from 'src/app/servicios/session.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  mascotas:any;

  constructor(private router: Router,private mascotasService: MascotasService, private localStorage:LocalStorageService, private sesionService:SessionService) { }

  ngOnInit() {
    this.getMascotasDueno();
  }

  getMascotasDueno(){
    let d = this.localStorage.getId();
    let obs = this.mascotasService.getMascotasDueno(d);
    obs.subscribe(mascotas => { // espera los datos en formato JSON
        this.mascotas = mascotas;
      });;
    console.log(this.mascotas);
    return this.mascotas;
  }

  getLogged(){
    return this.sesionService.getLogged();
  }

  redirect(){
    let status = this.getLogged();
    console.log("Loggeeeeeed: "+status);
    if (!status)
      this.router.navigate(['/index']);
  }

}

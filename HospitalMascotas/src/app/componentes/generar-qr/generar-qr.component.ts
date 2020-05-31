import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.component.html',
  styleUrls: ['./generar-qr.component.css']
})
export class GenerarQrComponent implements OnInit {
  url:any;
  constructor(private route: ActivatedRoute, private sesion:SessionService) { }
  
  ngOnInit() {
    this.redirect();
    this.getDatos();
  }

  redirect(){
    this.sesion.redirectTo("/index");
  }

  getDatos(){
    this.url = window.location.protocol+"//"+window.location.host+"/mostrarduenomascota/";
    this.route.paramMap.subscribe(params => {
      this.url = this.url + params.get("id");
    });
    console.log(this.url);
  }

}

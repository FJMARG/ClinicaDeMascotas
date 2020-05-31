import { Component, OnInit } from '@angular/core';
import { MascotasService } from 'src/app/servicios/mascotas-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-dueno-mascota',
  templateUrl: './mostrar-dueno-mascota.component.html',
  styleUrls: ['./mostrar-dueno-mascota.component.css']
})
export class MostrarDuenoMascotaComponent implements OnInit {
  id:any;
  mascota:any;
  
  constructor(private mascotasService: MascotasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
    let m = this.mascotasService.getMascota(this.id);
    m.subscribe(mas =>
      {
        this.mascota = mas;
      }
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../modelos/mascota';

@Injectable({
    providedIn: 'root'
})
export class MascotasService {

    constructor(private http: HttpClient) {}

    getMascotasDueno(d:number): Observable<any> {
        let path = 'http://localhost:8080/ttps-spring-clinicamascotas/mascota/dueno/';
        path = path+d.toString();
        return this.http.get<Mascota>(path);
    }
}

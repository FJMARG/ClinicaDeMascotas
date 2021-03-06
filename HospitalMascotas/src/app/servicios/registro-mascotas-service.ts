import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import 'rxjs/add/observable/of';
import { catchError } from 'rxjs/operators';
import { Mascota } from '../modelos/mascota'

@Injectable({
    providedIn: 'root'
  })

export class RegistroMascotaService {
    constructor(private http: HttpClient) {}

    getDueno(dueno:number): Observable<any> {
        let path = 'http://localhost:8080/ttps-spring-clinicamascotas/usuario/'+dueno;
        return this.http.get<Usuario>(path);
    }

    crearMascota(mascota:Mascota, dueno:number):Observable<Mascota>{
        let path = 'http://localhost:8080/ttps-spring-clinicamascotas/mascota/agregar_mascota/'+dueno;
        return this.http.post<Mascota>(path, mascota);
    }

    getUsuarios(): Observable<Usuario> {
        return this.http.get<Usuario>('http://localhost:8080/ttps-spring-clinicamascotas/usuario');
    }
}

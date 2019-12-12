import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MascotasService {

    idDueño: number;

    constructor(private http: HttpClient) {}

    list(): Observable<any> {
        let path = 'http://localhost:8080/ttps-spring-clinicamascotas/dueno/';
        path.concat(this.idDueño.toString());
        return this.http.get(path);
    }
}

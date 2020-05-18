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

    getMascota(id:string):Observable<any>{
        let path = 'http://localhost:8080/ttps-spring-clinicamascotas/mascota/'+id;
        return this.http.get<Mascota>(path);
    }

    deleteMascota(id:string):Observable<any>{
        const url = 'http://localhost:8080/ttps-spring-clinicamascotas/mascota/'+id;
        return this.http.delete(url);
    }

    putMascota(m:Mascota):Observable<Mascota>{
        let url = "http://localhost:8080/ttps-spring-clinicamascotas/mascota";
        return this.http.put<Mascota>(url, m);
    }

    getMascotas():Observable<any>{
        let path = 'http://localhost:8080/ttps-spring-clinicamascotas/mascota';
        return this.http.get<any>(path);
    }

    putMascotaVeterinario(id:string, vid:string){
        let url = "http://localhost:8080/ttps-spring-clinicamascotas/mascota/veterinario";
        return this.http.put<Mascota>(url, [id ,vid]);
    }
}

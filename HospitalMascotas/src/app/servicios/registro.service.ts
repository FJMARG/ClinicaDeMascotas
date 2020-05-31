import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { catchError } from 'rxjs/operators';

/*const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE'
  })
};*/

@Injectable({
  providedIn: 'root'
})

export class RegistroService {

  constructor(private http: HttpClient) { }

  crearUsuario(user:Usuario):Observable<Usuario>{
      console.log("Usuario en servicio registro:"+JSON.stringify(user));
      return this.http.post<Usuario>("http://localhost:8080/ttps-spring-clinicamascotas/usuario", user);
  }
}

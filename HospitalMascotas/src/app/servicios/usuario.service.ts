import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario(id:string):Observable<any> {
    let path = 'http://localhost:8080/ttps-spring-clinicamascotas/usuario/'+id.toString();
    return this.http.get<any>(path);
  }

  putUsuario(u:Usuario,id:string):Observable<Usuario>{
    let url = "http://localhost:8080/ttps-spring-clinicamascotas/usuario/"+id;
    return this.http.put<Usuario>(url, u).pipe(catchError((err: any) => {return Observable.of(u)}));
  }

}

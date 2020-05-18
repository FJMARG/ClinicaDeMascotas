import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import { catchError } from 'rxjs/operators';
import { Recordatorio } from '../modelos/recordatorio';

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

  getUsuariosRol(rol:string):Observable<any>{
    let url = "http://localhost:8080/ttps-spring-clinicamascotas/usuario/rol/"+rol;
    return this.http.get<any>(url);
  }

  getVeterinariosNoValidos():Observable<any>{
    let url = "http://localhost:8080/ttps-spring-clinicamascotas/usuario/veterinariosNoValidos";
    return this.http.get<any>(url);
  }

  getRecordatoriosDe(id:string):Observable<any>{
    let url = "http://localhost:8080/ttps-spring-clinicamascotas/usuario/recordatorios/"+id;
    return this.http.get<any>(url);
  }

  postRecordatorioPara(r:Recordatorio, id:string, mascotaid:string):Observable<Recordatorio>{
    return this.http.post<Recordatorio>("http://localhost:8080/ttps-spring-clinicamascotas/usuario/recordatorios/agregar/"+id+"/"+mascotaid, r).pipe(catchError((err: any) => {return Observable.of(r)}));
  }

  putVeterinarios(vet:any):Observable<any>{
    let url = "http://localhost:8080/ttps-spring-clinicamascotas/usuario/validarVeterinarios";
    return this.http.put<any>(url, vet).pipe(catchError((err: any) => {return Observable.of(vet)}));
  }

  postVisitaVeterinarioPor(v:any, id:string, mascotaid:string):Observable<any>{
    return this.http.post<any>("http://localhost:8080/ttps-spring-clinicamascotas/visita/mascota/"+mascotaid+"/veterinario/"+id, v).pipe(catchError((err: any) => {return Observable.of(v)}));
  }

  getVeterinariosValidos():Observable<any>{
    let url = "http://localhost:8080/ttps-spring-clinicamascotas/usuario/veterinariosValidos";
    return this.http.get<any>(url);
  }

  getMascotasAsignadas(id:string):Observable<any>{
    let url = "http://localhost:8080/ttps-spring-clinicamascotas/usuario/mascotasasignadas/"+id;
    return this.http.get<any>(url);
  }

  getMascotasPendientes(id:string):Observable<any>{
    let url = "http://localhost:8080/ttps-spring-clinicamascotas/usuario/mascotaspendientes/"+id;
    return this.http.get<any>(url);
  }

  putAceptarMascotas(ids:string[], idvet:string):Observable<any>{
    let url = "http://localhost:8080/ttps-spring-clinicamascotas/usuario/aceptarmascotas/"+idvet;
    return this.http.put<any>(url, ids);
  }
}
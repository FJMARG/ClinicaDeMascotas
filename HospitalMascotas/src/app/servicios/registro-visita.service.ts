import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroVisitaService {

  constructor(private http: HttpClient) {}

  getVisitas(): Observable<any> {
      let path = 'http://localhost:8080/ttps-spring-clinicamascotas/visita';
      return this.http.get<any>(path);
  }

}

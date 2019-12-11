import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(`http://localhost:8080/ttps-spring-clinicamascotas/clinica/auth`, { username, password })
          .pipe(map(tokenData => {
              // login successful si hay un token en la respuesta
              if (tokenData && tokenData.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(tokenData));
                  this.currentUserSubject.next(tokenData);
              }

              return tokenData;
          }));
  }

  logout() {
      // elimino las credenciales del localstorage al deslogearme
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}

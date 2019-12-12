import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenData } from '../modelos/token-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserDataSubject: BehaviorSubject<TokenData>;
  public currentUserData: Observable<TokenData>;

  constructor(private http: HttpClient) {
    this.currentUserDataSubject = new BehaviorSubject<TokenData>(JSON.parse(localStorage.getItem('currentUserData')));
    this.currentUserData = this.currentUserDataSubject.asObservable();
  }

  public get currentUserValue(): TokenData {
      return this.currentUserDataSubject.value;
  }

  login(email: string, password: string) {
      return this.http.post<any>("http://localhost:8080/ttps-spring-clinicamascotas/auth", { email, password })
          .pipe(map(tokenData => {
              // login successful si hay un token en la respuesta
              if (tokenData && tokenData.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUserData', JSON.stringify(tokenData));
                  this.currentUserDataSubject.next(tokenData);
              }
              return tokenData;
          }));
  }

  logout() {
      // elimino las credenciales del localstorage al deslogearme
      localStorage.removeItem('currentUserData');
      this.currentUserDataSubject.next(null);
  }
}

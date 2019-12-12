import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenizerService {

  constructor(private http: HttpClient) {}

  handleError(err: any, caught: Observable<any>) { // do something with error 
    console.log(err);
    return caught;
  } 

  getToken(): Observable<any> {

    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const url = "http://localhost:8080/ttps-spring-clinicamascotas";
    return this.http
    .post(
      url,
      { email: "email", password: "password" },
      { headers: headers }
    )
    .pipe(
      tap(data => console.log("Data: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

}

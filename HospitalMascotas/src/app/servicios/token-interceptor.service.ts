import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(private http: HttpClient){
  
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(`TokenInterceptorService - ${req.url}`);
    let authReq: HttpRequest<any> = req.clone({
      setHeaders:{
        Authorization : `Bearer ${localStorage.getItem("token")}`
      }
    });
    return next.handle(authReq);
  }

}
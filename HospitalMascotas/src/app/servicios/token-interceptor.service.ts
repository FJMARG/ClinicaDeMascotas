import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(private http: HttpClient, private localStorageService: LocalStorageService){
  
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(`TokenInterceptorService - ${req.url}`);
    let token =this.localStorageService.getToken();
    let authReq: HttpRequest<any> = req.clone({
      setHeaders:{
        Authorization : `Bearer ${token}`
      }
    });
    return next.handle(authReq);
  }

}
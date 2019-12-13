import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router,private ls: LocalStorageService){

  }

  getLogged(){
    let token = this.ls.getToken();
    if (token){
      let tokenSize = token.length;
      let logged = tokenSize !=0;
      return logged;
    }
    return false;
  }

  redirectTo(endpoint:string){
    if (!this.getLogged())
      this.router.navigate([endpoint]);
  }

}

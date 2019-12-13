import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private ls: LocalStorageService){

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

}

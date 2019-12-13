import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public logged:boolean;

  constructor() { 
  	this.logged = false;
  }

  setLogged(status:boolean) {
    this.logged=status;
  }

  getLogged(){
    return this.logged;
  }

}

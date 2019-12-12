import { Injectable } from '@angular/core';
import { TokenData } from '../modelos/token-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getId(){
    let data = localStorage.getItem('currentUserData');
    if (data == null)
      return;
    let string = data.toString();
    let object = JSON.parse(string);
    let id = object.id;
    return id;
  }

  getEmail(){
    let data = localStorage.getItem('currentUserData');
    if (data == null)
      return;
    let string = data.toString();
    let object = JSON.parse(string);
    let email = object.email;
    return email;
  }

  getRol(){
    let data = localStorage.getItem('currentUserData');
    if (data == null)
      return;
    let string = data.toString();
    let object = JSON.parse(string);
    let rol = object.rol;
    return rol;
  }

  getToken(){
    let data = localStorage.getItem('currentUserData');
    if (data == null)
      return;
    let string = data.toString();
    let object = JSON.parse(string);
    let token = object.token;
    return token;
  }

  getExp(){
    let data = localStorage.getItem('currentUserData');
    if (data == null)
      return;
    let string = data.toString();
    let object = JSON.parse(string);
    let exp = object.exp;
    return exp;
  }

  getCurrentUserData(){
    let data = localStorage.getItem('currentUserData');
    return data;
  }
}

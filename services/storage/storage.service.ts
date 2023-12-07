import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setStorage(key:any ,value:any){ 
    return  localStorage.setItem(key, JSON.stringify(value))
  }
  getStorage(key:any){
   return localStorage.getItem(key)
  }
  removestorage(key:any){
    return localStorage.removeItem(key)
  }
 
}

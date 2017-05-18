import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WebStorageService {

  constructor(private http: Http){ }

  get (key: string){
    return window.localStorage.getItem(key);
  }
  set(key: string, value: string){
    window.localStorage.setItem(key,value);
  }
  getRemote(){
    return this.http.get('postgres://zjypqgerrudfne:ef7c31f98f0f25555fa4b45e2cde05925914851b1d3747680027dd9fd634864e@ec2-54-221-255-153.compute-1.amazonaws.com:5432/d4qg2c0q1d72d2');
  }
  setTemote(payload: Object){
    return this.http.put('postgres://zjypqgerrudfne:ef7c31f98f0f25555fa4b45e2cde05925914851b1d3747680027dd9fd634864e@ec2-54-221-255-153.compute-1.amazonaws.com:5432/d4qg2c0q1d72d2',payload);
  }


}
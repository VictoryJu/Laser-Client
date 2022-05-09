import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getQueryString } from '../lib/utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
    login(data:{id:string,password:string,lane:number}){
        return this._http.post(`${environment.serviceUrl}/member/login`,data).toPromise();
    }

    regist(data:{id:string,password:string,club:string,name:string,birthday:string,gender:number,gunType:number,phone:string,pphone:string,email:string,address:string,zipCode:string}){
        return this._http.post(`${environment.serviceUrl}/member`,data).toPromise();
    }
}

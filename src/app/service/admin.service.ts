import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getQueryString } from '../lib/utils';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }
    
    getMemberList(data: {
        searchType:number,keyword:string,start:number,limit:number
    }) {
        return this._http.get(`${environment.serviceUrl}/member/list${getQueryString(data)}`).toPromise();
    }
    getMember(data: {
        memberId:string    
    }) {
        return this._http.get(`${environment.serviceUrl}/member${getQueryString(data)}`).toPromise();
    }
    updateMember(data: {
        id:string,password?:string,club:string,name?:string,birthday:string,gender:number,gunType:number,phone:string,pphone:string,email:string,address:string,zipCode:string,memo:string,level:number,point:number,status:number
    }) {
        return this._http.put(`${environment.serviceUrl}/member`,data).toPromise();
    }
    getClubList(data: {
        searchType: number, keyword:string, start:number, limit:number
    }) {
        return this._http.get(`${environment.serviceUrl}/member/club/list${getQueryString(data)}`).toPromise();
    }
    getClub(data: {
        club:string
    }) {
        return this._http.get(`${environment.serviceUrl}/member/club${getQueryString(data)}`).toPromise();
    }
    createClub(data: {
        name:string,image:string
    }) {
        return this._http.post(`${environment.serviceUrl}/member/club`, data).toPromise();
    }
}

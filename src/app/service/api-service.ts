import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable() 
export class ApiService {
    constructor(private _http:HttpClient) { }

    environment = environment;
    getPresets() {
        return this._http.get(`${environment.serviceUrl}/match/presets`).toPromise();
    }

    setLane(data:{lane:number; groupName:string; name:string}){
        return this._http.post(`${environment.serviceUrl}/match/setlane`,data).toPromise();
    }

    startGame(data:{matchId:string}){
        return this._http.post(`${environment.serviceUrl}/match/start`,data).toPromise();
    }
    
    createGame(data:{matchType:number, personnel:number, personnelOfPass:number, partA:any}) {
        return this._http.post(`${environment.serviceUrl}/match`,data).toPromise();
    }

    getMatch(matchId:string){
        return this._http.get(`${environment.serviceUrl}/match?matchId=${matchId}`).toPromise();
    }

    getLaneInfo(){
        return this._http.get(`${environment.serviceUrl}/match/firinglane`).toPromise();
    }

    createCustomGame(data:{time:number,shot:number,seies:number,cutOffSeries:number, scoreType:number, scoreLimit:number, personnel:number, personnelOfPass:number}) {
        return this._http.post(`${environment.serviceUrl}/match/custom`,data).toPromise();
    }
    
    sendShotServer(data:{matchId:string, lane:number,x:number, y:number, score:number}){
        return this._http.put(`${environment.serviceUrl}/match`,data).toPromise();
    }

    getWinners(matchId:string){
        return this._http.get(`${environment.serviceUrl}/match/winners${this.getQueryString(matchId)}`).toPromise();
    }

    login(data:{id:string,password:string,lane:number}){
        return this._http.post(`${environment.serviceUrl}/member/login`,data).toPromise();
    }

    regist(data:{id:string,password:string,club:string,name:string,birthday:string,gender:number,gunType:number,phone:string,pphone:string,email:string,address:string,zipCode:string}){
        return this._http.post(`${environment.serviceUrl}/member`,data).toPromise();
    }

    getMemberList(data: {
        searchType:number,keyword:string,start:number,limit:number
    }) {
        return this._http.get(`${environment.serviceUrl}/member/list${this.getQueryString(data)}`).toPromise();
    }
    getMember(data: {
        memberId:string    
    }) {
        return this._http.get(`${environment.serviceUrl}/member${this.getQueryString(data)}`).toPromise();
    }
    updateMember(data: {
        id:string,password?:string,club:string,name?:string,birthday:string,gender:number,gunType:number,phone:string,pphone:string,email:string,address:string,zipCode:string,memo:string,level:number,point:number,status:number
    }) {
        return this._http.put(`${environment.serviceUrl}/member`,data).toPromise();
    }
    getClubList(data: {
        searchType: number, keyword:string, start:number, limit:number
    }) {
        return this._http.get(`${environment.serviceUrl}/member/club/list${this.getQueryString(data)}`).toPromise();
    }
    getQueryString(data: any) {
        return '?' + Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&');
    }
}

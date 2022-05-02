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
    login(data: {
        id:string,password:string,matchId:string,lane:number
    }) {
        return this._http.post(`${environment.serviceUrl}/member/login`, data).toPromise();
    }
    register(data: {
        id:string,password:string,name:string,birthday:string,gender:number,gunType:number,phone:string,pphone:string,email:string,groupId:number,address:string,zipCode:string
    }) {
        return this._http.post(`${environment.serviceUrl}/member/signup`, data).toPromise();
    }
    getQueryString(data: any) {
        return '?' + Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&');
    }
}

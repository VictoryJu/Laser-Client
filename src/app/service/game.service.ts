import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getQueryString } from '../lib/utils';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private _http: HttpClient) { }
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
        return this._http.get(`${environment.serviceUrl}/match/winners${getQueryString(matchId)}`).toPromise();
    }
}

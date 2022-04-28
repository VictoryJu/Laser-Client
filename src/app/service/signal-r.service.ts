import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";  // or from "@microsoft/signalr" if you are using a new library
import { Observable, observable } from 'rxjs';
import { ChartModel } from '../interface/chartmodel';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: ChartModel[];
  public hubConnection: signalR.HubConnection
  public startConnection = (method) => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('http://192.168.210.67:22092/txlive')
                            .build();
    this.hubConnection
      .start()
      .then(() => {
            console.log('Connect');
            if(method === 'lane') this.sendMsg('lane');
            if(method === 'main') this.sendMsg('main');
        })
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  LaneDataListener(){
    let observable = new Observable(observer=>{
        this.hubConnection.on('lane_start', (data) => {
            this.data = data;
            observer.next(this.data);
        });          
    })
    return observable; 
  }

  MainDataListener(){
    let observable:any = new Observable(observer=>{
        this.hubConnection.on('summary', (data) => {
            this.data = data;
            observer.next(this.data);
        });          
    })
    return observable; 
  }

  public sendMsg = (data)=>{
      this.hubConnection.send("join",data);
      console.log(data);    
  }

}
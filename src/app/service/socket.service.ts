import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { GameMainComponent } from '../module/common/game/component/game-main/game-main.component';

@Injectable() 
export class SocketService {
    private socket: Socket;
    constructor() { 
        // this.socket = io('http://localhost:8000');
    }

    seneMessage(msg: string){
        this.socket.emit('threshold',{threshold:msg});
    }
    
    onNewMessage(){
        return new Observable(observer=>{
            this.socket.on('newMessage',msg=>{
                observer.next(msg);
                console.log('실행했음')
            })
        })
    }

    getMessages() {
        let observable = new Observable(observer => {
            this.socket = io('http://localhost:8000');
            this.socket.on('result', (data) => {
            observer.next(data);    
        });
            return () => {
            this.socket.disconnect();
            };  
        })     
        return observable;
    }   
}

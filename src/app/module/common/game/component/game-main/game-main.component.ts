import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocketService } from 'src/app/service/socket.service';
import { LoginComponent } from '../../../auth/component/login/login.component';
import { GameConfigComponent } from '../game-config/game-config.component';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss']
})
export class GameMainComponent implements OnInit {
    
  constructor(public _mat:MatDialog, private render:Renderer2, private _socket:SocketService) { }
    msg: any;
    
  ngOnInit(): void {
        this.setToday();
        setTimeout(()=>{
            this.setTarget(); 
        }) 
        this.openConfigTarget();

        this._socket.getMessages().subscribe(msg=>{
            this.setCenterCoordinate(msg);
        })
    } 
    ngAfterViewInit(){
        setTimeout(()=>{
            this.setRightInfoHeight();
        }) 
    }

    zeroX:number;
    zeroY:number
    openConfigTarget(){
        const dialogRef = this._mat.open(GameConfigComponent,{
            data:{zeroX:this.zeroX,zeroY:this.zeroY}
        });
        dialogRef.afterClosed().subscribe(result=>{
            if(result){
                this.zeroX = result.zeroX;
                this.zeroY = result.zeroY;
                console.log(result);
            }
        })
    }
    rightinfoHeight:number;
    @ViewChild('rightInfo') rightInfo:ElementRef;
    setRightInfoHeight(){
        this.rightinfoHeight = this.rightInfo.nativeElement.offsetHeight - 65;
        console.log(this.rightinfoHeight);
    }
    @ViewChild('target') target:ElementRef;

    round = 1;
    activeTimer = false;
    timeSec = 300;
    min = Math.floor(this.timeSec/60);
    sec = this.timeSec%60;
    startTimer:any;
    startTime:number;
    timer(){
        this.startTime = Date.now();
        this.startTimer = setInterval(()=>{   
            this.min = Math.floor(this.timeSec / 60);
            this.sec = this.timeSec % 60;
            this.timeSec -= 1;
            if(this.timeSec<0){
                this.timeSec = 300;
                this.min = Math.floor(this.timeSec / 60);
                this.sec = this.timeSec % 60;
                this.round += 1;
                this.activeTimer = false;
                clearInterval(this.startTimer);
            }
        },1000)
    }

    startShotTimer:any;
    shotTime = 0;
    shotRoundInfo = [];
    shotTimer(){
        this.startShotTimer = setInterval(()=>{
        this.shotTime += 1;
        },1000)
    }

    serverX:number;
    serverY:number
    setCenterCoordinate(data){
        this.serverX = (data.maxX + data.minX) / 2.0;
        this.serverY = (data.maxY + data.minY) / 2.0;
        
        this.shoting(this.serverX,this.serverY)
    }

    shotCnt = 10;
    playTime:number;
    

    shoting(serverX,serverY){
        if(this.activeTimer && this.shotCnt > 0){
            console.log(this.ratio);
            
            clearInterval(this.startShotTimer);
            let x = (serverX + this.zeroX) * this.ratio;
            console.log(this.zeroX, serverX, x);
            let y = (serverY + this.zeroY) * this.ratio;
            let distance = Math.sqrt(Math.pow(x-this.centerX,2) + Math.pow(y-this.centerY,2));
            let breakPoint = this.maxRadius / 10;
            let score = 10 - Math.floor(distance / breakPoint);
            if(distance >= this.maxRadius * 0.075 && distance <= this.maxRadius*0.1){
                score = 9;
                console.log("탔음");
            } 
            if(score <= 0) score = 0;
            console.log(score);
            let time = this.shotTime;
            let obj = {x,y,score,time}
            this.shotRoundInfo.push(obj);
            this.shotTime = 0;
            this.shotCnt -= 1;                
            this.shotTimer();
            if(this.shotCnt === 0){
                this.resetTime();
                this.round += 1;
                //shotCnt는 가변값임 바꿔줘야함.
                this.shotCnt = 10;
                this.playTime =  Date.now() - this.startTime;
                this.setRoundScore();
            }
        }
    }



    shotTotalInfo = []
    setRoundScore(){
        let score = 0;
        let shotCnt = this.shotCnt;
        let shotTime = this.shotTime;
        let round = this.round-1;
        this.shotRoundInfo.forEach(item=>{
            score += item.score;
            shotTime += item.time
        })
        
        let obj = {round,score,shotCnt,shotTime};
        this.shotTotalInfo.push(obj);
        console.log(this.shotTotalInfo);
        
    }

    mywidth:number;
    myheight:number;
    centerX:number;
    centerY:number;
    maxRadius:number;
    ratio:number;
    setTarget(){
        let rect = this.target.nativeElement.getBoundingClientRect()
        this.mywidth = rect.width;
        this.myheight = rect.height;
        this.maxRadius = rect.height / 2;
        this.centerX = this.mywidth / 2;
        this.centerY = this.myheight / 2;
        this.ratio = rect.width / 640;
        console.log(rect);
    }

    stopTime(){
        clearInterval(this.startTimer);
        this.activeTimer = false;
    }
    
    resetTime(){
        clearInterval(this.startTimer);
        this.timeSec = 10;
        this.min = Math.floor(this.timeSec / 60);
        this.sec = this.timeSec % 60;
        this.activeTimer = false;
    }



    _today = new Date();
    get today(){
        return this._today;
    }
    set today(v){
        this._today = v;
    }
    setToday(){
        let interval = setInterval(()=>{
            this.today = new Date();
        },1000)
    }
}

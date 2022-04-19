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
        this._socket.getMessages().subscribe(msg=>{  
            this.setCenterCoordinate(msg);
        })
    } 
    ngAfterViewInit(){
        setTimeout(()=>{
            this.setRightInfoHeight();
        }) 
        console.log(this.shotCnt);
        
    }

    zeroX = 0;
    zeroY = 0;
    config = {
        setTimerMin : 3,
        activeDelay : true,
        delayTime: 3,
        cameraLight : 1,
        illuminance : 1,
        titleTarget : '사격표적지(일반형)',
        shotCnt : 10,
        activeAutoRound : true,
        activeSound : true,
        activeDecimal : true,
        zeroX : 0,
        zeroY : 0        
    }

    initGameConfg(config){
        if(config){
            this.config = {...config};
            this.bullet = this.config.shotCnt;
            this.timeSec = this.config.setTimerMin*60;
            this.min = Math.floor(this.timeSec/60);
            this.sec = this.timeSec%60;
            this.zeroX = this.config.zeroX;
            this.zeroY = this.config.zeroY;            
        }else{

        }
    }

    openSystemConfig(){
        const dialogRef = this._mat.open(GameConfigComponent,{
            data:{...this.config}
        });
        dialogRef.afterClosed().subscribe(result=>{
            if(result){
                this.initGameConfg(result);
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
    bullet = 10;
    activeTimer = false;
    timeSec = 180;
    min = Math.floor(this.timeSec/60);
    sec = this.timeSec%60;
    startTimer:any;
    startTime:number;
    activeStopTimer=false;
    timer(){
        if(!this.activeStopTimer){
            this.shotRoundInfo = []
        }
        let defaultTime = this.timeSec;
        this.activeStopTimer = false;
        if(this.activeTimer){
            this.startTime = Date.now();
            this.startTimer = setInterval(()=>{   
                this.min = Math.floor(this.timeSec / 60);
                this.sec = this.timeSec % 60;
                this.timeSec -= 1;
                if(this.timeSec<0){
                    this.timeSec = defaultTime;
                    this.min = Math.floor(this.timeSec / 60);
                    this.sec = this.timeSec % 60;
                    this.round += 1;
                    this.shotCnt = this.bullet;
                    this.activeTimer = false;
                    this.setRoundScore();
                    clearInterval(this.startTimer);
                }
            },1000)            
        }
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
        // let buffer = new Uint8Array(data.img);
        // let s = String.fromCharCode.apply(null,buffer);
        // console.log(data);
        
        // console.log(buffer);
        
        // console.log(s);
        
        // console.log(decodeURIComponent(atob(s)));
        
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
                this.shotCnt = this.bullet;
                this.playTime =  Date.now() - this.startTime;
                this.setRoundScore();
            }
        }
    }

    shotDelay(){

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
        this.shotRoundInfo = [];
        this.timeSec = this.config.setTimerMin*60;
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

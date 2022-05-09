import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocketService } from 'src/app/service/socket.service';
import { LoginComponent } from '../../../auth/component/login/login.component';
import { GameConfigComponent } from '../game-config/game-config.component';
import * as io from 'socket.io-client';
import { MyMainComponent } from '../../../my/component/my-main/my-main.component';
import { SignalRService } from 'src/app/service/signal-r.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api-service';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss']
})
export class GameMainComponent implements OnInit {
    
  constructor(public _mat:MatDialog, private render:Renderer2, private _socket:SocketService, public _signal:SignalRService, private _http: HttpClient, private _api:ApiService) { }
    msg: any;
    
  ngOnInit(): void {
        this.setToday();
        setTimeout(()=>{
            this.setTarget(); 
        }) 
        this._socket.getMessages().subscribe(msg=>{  
            console.log('실행');
            this.setCenterCoordinate(msg);
        })
        this._signal.startConnection('lane');
        this._signal.LaneDataListener().subscribe(data=>{
            this.laneInfo = data;
            this.matchId = this.laneInfo.matchId;
            console.log(this.matchId);
            
        });
        console.log(this.laneInfo);
    } 
    ngAfterViewInit(){
        setTimeout(()=>{
            this.setRightInfoHeight();
        }) 
        console.log(this.shotCnt);
        
    }

    getMsg(){
        this._http.get('http://192.168.210.67:22092/txlive').subscribe(res=>{console.log(res)});
    }

    isTest=true;
    mouseOffset(e){
        let obj = {x:e.offsetX,y:e.offsetY}
        this.setCenterCoordinate(obj);
        console.log(obj);
        
    }
    
    laneInfo:any;
    lane = 1;
    matchId:string;
    async sendServerShotInfo(x,y,score){
        try{
            const res:any = await this._api._game.sendShotServer({
                matchId : this.matchId,
                lane : this.lane,
                x ,
                y,
                score
            })
        }catch(e){
            console.log(e);
        }
    }


    userName:string;
    groupName:string;
    groupImg:string;
    openLogin(){
        let loginRef = this._mat.open(LoginComponent);
        loginRef.afterClosed().subscribe(result=>{
            if(result){
                this.userName = result.name;
                this.groupName = result.club;
                this.groupImg = result.clubImage;
            }
        })
    }

    openMyPage(){
        this._mat.open(MyMainComponent);
    }

    zeroX = 0;
    zeroY = 0;
    config = {
        setTimerMin : 3,
        activeDelay : true,
        delayTime: 0,
        cameraLight : 1,
        illuminance : 1,
        titleTarget : '사격표적지(일반형)',
        shotCnt : 10,
        activeAutoRound : true,
        activeSound : true,
        activeDecimal : true,
        zeroX : 0,
        zeroY : 0,
    }

    initGameConfg(config){
        if(config){
            this.config = {...config};
            this.bullet = this.config.shotCnt;
            this.shotCnt = this.bullet;
            this.timeSec = this.config.setTimerMin*60;
            this.min = Math.floor(this.timeSec/60);
            this.sec = this.timeSec%60;
            this.zeroX = this.config.zeroX;
            this.zeroY = this.config.zeroY;      
            this.delayTime = this.config.delayTime;      
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
                    this.showRoundInfo = '';
                    clearInterval(this.startTimer);
                }
            },1000)            
        }
    }

    startShotTimer:any;
    shotTime = 0;
    sumShotTime = 0;
    shotTimer(){
        this.startShotTimer = setInterval(()=>{
        if(!this.delay){
            this.shotTime += 1;
        }
        },1000)
    }

    clearShotTimer(){
        clearInterval(this.startShotTimer);
        this.sumShotTime = 0;
        this.shotTime = 0; 
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
        if(this.isIntervalDelay)return;
        this.serverX = (data.maxX + data.minX) / 2.0;
        this.serverY = (data.maxY + data.minY) / 2.0;
    
        this.shoting(this.serverX,this.serverY)
    }

    shotCnt = 10;
    playTime:number;
    shotRoundInfo:any = [];
    shotingCount = 0;
    sumScore = 0;
    showRoundInfo:any;
    hitCount = 0;
    totalScore = 0;
    isEnd = false;
    shoting(serverX,serverY){
        if(this.activeTimer && this.shotCnt > 0 && !this.delay){
            this.sumShotTime += this.shotTime;
            clearInterval(this.startShotTimer);
            let x = (serverX + this.zeroX) * this.ratio;
            let y = (serverY + this.zeroY) * this.ratio;
            let distance = Math.sqrt(Math.pow(x-this.centerX,2) + Math.pow(y-this.centerY,2));
            let breakPoint = this.maxRadius / 10;
            let score = 10.9 - (distance / breakPoint);
            score = Math.round(score*10)/10;
            if(distance >= this.maxRadius * 0.075 && distance <= this.maxRadius*0.1){
                score = 9;
                console.log("탔음");
            } 
            if(score <= 0) score = 0;
            let time = this.shotTime;
            this.sumScore = score;
            
            if(this.shotingCount > 0){
                this.sumScore = this.shotRoundInfo[this.shotingCount-1].sumScore + score;
            }
            this.shotingCount += 1;
            let obj = {x,y,score,time,shotingCount:this.shotingCount,sumScore:this.sumScore,index:this.shotingCount};
            let obj2 = {round:this.round,time:this.sumShotTime,score,shotingCount:this.shotingCount,sumScore:this.sumScore};
            this.sendServerShotInfo(x,y,score);
            this.showRoundInfo = obj2;
            this.shotRoundInfo.push(obj);
            this.shotTime = 0;
            this.totalScore += score;
            this.totalScore = Math.round(this.totalScore*10)/10
            if(score>=9){
                this.hitCount +=1;
            }
            this.shotCnt -= 1;                
            this.shotTimer();
            if(this.shotCnt > 0){
                this.startDelay();
            }
            if(this.shotCnt === 0){
                this.isEnd = true;
                this.round += 1;
                this.shotCnt = this.bullet;
                this.playTime =  Date.now() - this.startTime;
                this.clearDelay();
                this.setRoundScore();
                this.resetTime();
            }

        }
    }

    clearScoreShoting(){
        if(!this.activeStopTimer){
            this.shotingCount = 0;
            this.sumScore = 0;
        }
    }

    delay = false;
    delayTime = 3;
    isIntervalDelay = false;
    startDelayInterval:any;
    startDelay(){
        if(this.isIntervalDelay)return;
        if(this.isEnd) return;
        this.delay = true;
        this.stopTime();
        if(this.delay){
            this.startDelayInterval = setInterval(()=>{
                this.isIntervalDelay = true;
                this.delayTime -= 1;
                if(this.delayTime===0){
                    this.delayTime = 3;
                    this.delay = false;
                    this.activeTimer=true; 
                    this.isIntervalDelay = false;
                    this.activeStopTimer = true;
                    this.timer();
                    clearInterval(this.startDelayInterval);
                }
            },1000)
        }

    }

    selectShotTotalInfo:number;
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
        let obj = {round,score,shotCnt,shotTime,roundInfo:this.shotRoundInfo};
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
        this.timeSec = this.config.setTimerMin*60;
        this.min = Math.floor(this.timeSec / 60);
        this.sec = this.timeSec % 60;
        this.activeTimer = false;
        this.shotCnt = this.bullet;
        this.showRoundInfo = '';
        this.isEnd = false;
        this.clearDelay();
        this.clearShotTimer();
    }

    clearDelay(){
        clearInterval(this.startDelayInterval);
        this.delay = false;
        this.delayTime = 3;
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

    print(){
        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=700,width=800');
        popupWin.document.open();
        popupWin.document.write(`
          <html>
            <head>
              <link rel="stylesheet" type="text/css" href="./skiyagi.css">   
              <title>Print tab</title>
            </head>
            <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
    }
}

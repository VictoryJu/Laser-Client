import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameTargetConfigComponent } from '../game-target-config/game-target-config.component';
import { GameZeroConfigComponent } from '../game-zero-config/game-zero-config.component';

@Component({
    selector: 'app-game-config',
    templateUrl: './game-config.component.html',
    styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {

    constructor(public _matRef:MatDialogRef<GameConfigComponent>, public _mat:MatDialog, @Inject(MAT_DIALOG_DATA) public data:{setTimerMin:number,
        activeTimer: boolean,
        activeDelay: boolean,
        delayTime: number,
        cameraLight: number,
        illuminance: number,
        titleTarget: string,
        shotCnt: number,
        selectLanguage:string,
        activeAutoRound: boolean,
        activeSound: boolean,
        activeDecimal: boolean,
        zeroX: number,
        zeroY: number}) { }

    ngOnInit(): void {
        this.mainConfig();
    }

    openGameTargetConfig(){
        const dialogRef = this._mat.open(GameTargetConfigComponent,{
            data:{selectTarget:this.config.titleTarget}
        });
        
        dialogRef.afterClosed().subscribe(result=>{
            if(result){
                this.config.titleTarget = result.selectTarget;
            }
            console.log(this.config.titleTarget);
        })
    }


    openGameZeroConfig(){
        const dialogRef = this._mat.open(GameZeroConfigComponent,{
            data:{zeroX:this.config.zeroX,zeroY:this.config.zeroY}
        });
        dialogRef.afterClosed().subscribe(result=>{
            if(result){
                this.config.zeroX = result.zeroX;
                this.config.zeroY = result.zeroY;
            }
            console.log(result);
        })
    }

    closeCancelConfig(){
        this._matRef.close();
    }
    closeGameConfig(){
        this._matRef.close({...this.config});
    }

    defaultConfig = {
        setTimerMin : 3,
        activeTimer : true,
        activeDelay : true,
        delayTime: 3,
        selectLanguage: '한국어',
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

    mainConfig(){
        if(this.data){
            this.config = {...this.data};
            console.log(this.config);
        }
    }
    config = {...this.defaultConfig};

    slideWidth=0;
    activeTimerConfig = false;
    timerMinObj = [3,5,15,75]

    selectLanguage = '한국어';
    languageArr = ['한국어','English'];
    activeLanguage = false;

    plusCameraLight(){
        if(this.config.cameraLight < 5){
            this.config.cameraLight += 1;
        }
    }
    prevCameraLight(){
        if(this.config.cameraLight > 1){
            this.config.cameraLight -= 1;
        }
    }
    plusIlluminance(){
        if(this.config.illuminance < 5){
            this.config.illuminance += 1;
        }
    }
    prevIlluminance(){
        if(this.config.illuminance > 1){
            this.config.illuminance -= 1;
        }
    }

    targetTitleArr = ['사격 표적지(일반형)','20M / 50M 표적','경찰 연습용','10M 공기소총 표적','10M 공기권총 표적'];
    activeTargetConfig = false;

    resetConfig(){
        this.config = {...this.defaultConfig};
    }
}

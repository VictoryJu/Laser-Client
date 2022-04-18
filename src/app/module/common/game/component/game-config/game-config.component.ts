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

    constructor(public _matRef:MatDialogRef<GameConfigComponent>, public _mat:MatDialog, @Inject(MAT_DIALOG_DATA) public data:{zeroX:number,zeroY:number}) { }

    ngOnInit(): void {
        this.openGameZeroConfig();
    }

    openGameTargetConfig(){
        const dialogRef = this._mat.open(GameTargetConfigComponent,{
            data:{selectTarget:this.titleTarget}
        });
        dialogRef.afterClosed().subscribe(result=>{
            if(result){
                this.titleTarget = result.selectTarget;
            }
            console.log(this.titleTarget);
        })
    }

    zeroX:number;
    zeroY:number
    openGameZeroConfig(){
        const dialogRef = this._mat.open(GameZeroConfigComponent,{
            data:{zeroX:this.zeroX,zeroY:this.zeroY}
        });
        dialogRef.afterClosed().subscribe(result=>{
            if(result){
                this.zeroX = result.zeroX;
                this.zeroY = result.zeroY;
            }
            console.log(result);
        })
    }

    closeGameConfig(){
        this._matRef.close({zeroX:this.zeroX,zeroY:this.zeroY});
    }

    timerMinObj = [3,5,15,75];
    setTimerMin = 3;
    slideWidth=0;
    activeTimerConfig = false;
    activeTimer = true;

    activeDelay = true;
    delayTime = 3;
    
    cameraLight = 1;
    illuminance = 1;
    plusCameraLight(){
        if(this.cameraLight < 5){
            this.cameraLight += 1;
        }
    }
    prevCameraLight(){
        if(this.cameraLight > 1){
            this.cameraLight -= 1;
        }
    }
    plusIlluminance(){
        if(this.illuminance < 5){
            this.illuminance += 1;
        }
    }
    prevIlluminance(){
        if(this.illuminance > 1){
            this.illuminance -= 1;
        }
    }

    targetTitleArr = ['사격 표적지(일반형)','20M / 50M 표적','경찰 연습용','10M 공기소총 표적','10M 공기권총 표적'];
    activeTargetConfig = false;
    titleTarget = '사격 표적지(일반형)';

    shotCnt=10;
    activeShotCnt = true;

    activeAutoRound = true;

    activeSound = true;

    activeDeciaml = true;

    resetConfig(){
        this.setTimerMin = 3;
        this.activeTimer = true;
        this.activeDelay = true;
        this.titleTarget = '사격 표적지(일반형)';
        this.shotCnt = 10;
        this.activeShotCnt = true;
        this.activeAutoRound = true;
        this.activeSound = true;
        this.delayTime = 3;
        this.activeDeciaml = true;
        this.activeSound = true;
        this.shotCnt = 10;
        this.cameraLight = 1;
        this.illuminance = 1;
    }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-game-config',
    templateUrl: './game-config.component.html',
    styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {

    constructor(public _matRef:MatDialogRef<GameConfigComponent>) { }

    ngOnInit(): void {
    }
    closeGameConfig(){
        this._matRef.close();
    }

    timerMinObj = [3,5,15,75];
    setTimerMin = 3;
    slideWidth=0;
    activeTimerConfig = false;
    activeTimer = true;


    activeDelay = true;
    delayTime = 3;

    targetTitleArr = ['사격 표적지(일반형)','20M / 50M 표적','경찰 연습용','10M 공기소총 표적','10M 공기권총 표적'];
    activeTargetConfig = false;
    titleTarget = '사격 표적지(일반형)';
}

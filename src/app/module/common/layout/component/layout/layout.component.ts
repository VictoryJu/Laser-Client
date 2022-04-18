import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../auth/component/login/login.component';
import { GameConfigComponent } from '../../../game/component/game-config/game-config.component';
import { GameTargetConfigComponent } from '../../../game/component/game-target-config/game-target-config.component';
import { MyMainComponent } from '../../../my/component/my-main/my-main.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public _mat:MatDialog) { }

  ngOnInit(): void {
}
    openLogin(){
        this._mat.open(LoginComponent);
    }
    openConfig(){
        this._mat.open(GameConfigComponent);
    }
    openMyPage(){
        this._mat.open(MyMainComponent);
    }

    mouseHoverPerson=false;
}

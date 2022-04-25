import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  constructor(public _mat:MatDialog, private _router:Router) { }

    url:string;
    ngOnInit(): void {
        this.url = this._router.url;
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

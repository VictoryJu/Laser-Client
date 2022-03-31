import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from 'src/app/module/common/auth/component/change-password/change-password.component';
import { LoginComponent } from 'src/app/module/common/auth/component/login/login.component';
import { RegistComponent } from 'src/app/module/common/auth/component/regist/regist.component';
import { MyMainComponent } from 'src/app/module/common/my/component/my-main/my-main.component';

@Component({
  selector: 'app-show-game-main-page',
  templateUrl: './show-game-main-page.component.html',
  styleUrls: ['./show-game-main-page.component.scss']
})
export class ShowGameMainPageComponent implements OnInit {

  constructor(public _matDiaog: MatDialog) { }

  ngOnInit(): void {
      
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../auth/component/login/login.component';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss']
})
export class GameMainComponent implements OnInit {

  constructor(public _mat:MatDialog) { }

  ngOnInit(): void {
  }

}

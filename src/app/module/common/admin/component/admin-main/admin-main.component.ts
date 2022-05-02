import { AdminSelectLaneComponent } from './../admin-select-lane/admin-select-lane.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AdminGameConfigComponent } from '../admin-game-config/admin-game-config.component';
import { AdminGroupBoardComponent } from '../admin-group-board/admin-group-board.component';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  constructor(public _mat:MatDialog) { }

  ngOnInit(): void {
      this.openDashboard();
  }

  openDashboard(){
      this._mat.open(AdminGroupBoardComponent);
  }
}

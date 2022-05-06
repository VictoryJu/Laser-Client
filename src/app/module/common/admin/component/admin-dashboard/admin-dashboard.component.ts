import { AdminGameManagementComponent } from './../admin-game-management/admin-game-management.component';
import { AdminMemberComponent } from './../admin-member/admin-member.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { matClose } from 'src/app/lib/utils';
import { AdminGameConfigComponent } from '../admin-game-config/admin-game-config.component';
import { AdminGroupBoardComponent } from '../admin-group-board/admin-group-board.component';
import { AdminNetworkConfigComponent } from '../admin-network-config/admin-network-config.component';
import { AdminSelectLaneComponent } from '../admin-select-lane/admin-select-lane.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public _mat:MatDialog, public _matRef:MatDialogRef<AdminDashboardComponent>) { }

  ngOnInit(): void {
      // this.openGroupBoard();
  }

  openLaneConfig() {
    let dialogRef = this._mat.open(AdminGameConfigComponent, {
        hasBackdrop:false
    });
    dialogRef.afterClosed().subscribe(()=>{
        // this._matRef.close();
    })
  }

  openNetworkConfig(){
      this._mat.open(AdminNetworkConfigComponent)
  }
  openGroupBoard(){
      this._mat.open(AdminGroupBoardComponent)
  }


  openMemberConfig() {
    this._mat.open(AdminMemberComponent);
  }

  openGameManagement() {
    this._mat.open(AdminGameManagementComponent);
  }


  closeConfig(){
    matClose(this._matRef);
  }

}

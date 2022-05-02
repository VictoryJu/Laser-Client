import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminGameConfigComponent } from '../admin-game-config/admin-game-config.component';
import { AdminSelectLaneComponent } from '../admin-select-lane/admin-select-lane.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public _mat:MatDialog, public _matRef:MatDialogRef<AdminDashboardComponent>) { }

  ngOnInit(): void {
      this.openLaneConfig();
  }

  openLaneConfig() {
    let dialogRef = this._mat.open(AdminGameConfigComponent, {
        hasBackdrop:false
    });
    dialogRef.afterClosed().subscribe(()=>{
        this._matRef.close();
    })
  }

}

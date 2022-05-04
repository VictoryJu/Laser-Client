import { AdminRegistPlayerComponent } from './../admin-regist-player/admin-regist-player.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-game-management',
  templateUrl: './admin-game-management.component.html',
  styleUrls: ['./admin-game-management.component.scss']
})
export class AdminGameManagementComponent implements OnInit {

  constructor(public _matDialogRef:MatDialogRef<AdminGameManagementComponent>, public _mat:MatDialog) { }

  ngOnInit(): void {
  }

  step: number = 1;
  
  close() {
    if (this.step === 1) this._matDialogRef.close();
    else this.step = 1;
  }
  openRegistPlayer() {
    this._mat.open(AdminRegistPlayerComponent);
  }
}

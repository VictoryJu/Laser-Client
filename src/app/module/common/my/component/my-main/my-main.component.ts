import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../../../auth/component/change-password/change-password.component';

@Component({
  selector: 'app-my-main',
  templateUrl: './my-main.component.html',
  styleUrls: ['./my-main.component.scss']
})
export class MyMainComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<MyMainComponent>, public _matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  closeMy(){
      this._matRef.close();
  }
  openChangePassword(){
      this._matDialog.open(ChangePasswordComponent);
  }
}

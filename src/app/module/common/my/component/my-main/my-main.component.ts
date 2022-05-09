import { ApiService } from 'src/app/service/api-service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../../../auth/component/change-password/change-password.component';

@Component({
  selector: 'app-my-main',
  templateUrl: './my-main.component.html',
  styleUrls: ['./my-main.component.scss']
})
export class MyMainComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<MyMainComponent>, public _matDialog:MatDialog, private _api:ApiService) { }

  ngOnInit(): void {
    this.getMyProfile();
  }
  closeMy(){
      this._matRef.close();
  }
  openChangePassword(){
      this._matDialog.open(ChangePasswordComponent);
  }
  async getMyProfile() {
    try {
      const res: any = await this._api._user.getMyProfile();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}

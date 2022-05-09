import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api-service';

@Component({
  selector: 'app-admin-group-update',
  templateUrl: './admin-group-update.component.html',
  styleUrls: ['./admin-group-update.component.scss']
})
export class AdminGroupUpdateComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<AdminGroupUpdateComponent>,@Inject(MAT_DIALOG_DATA) public data: {clubName:string},private _api:ApiService) { }

  ngOnInit(): void {
    this.getClub();
  }

  clubData:any;
  clubMemberList = [];
  async getClub() {
    try {
      const res: any = await this._api._admin.getClub({
        club: this.data.clubName
      })
      this.clubData = res.data;
      this.clubMemberList = res.data.members;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}

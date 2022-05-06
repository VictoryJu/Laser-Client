import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api-service';

@Component({
  selector: 'app-admin-member-update',
  templateUrl: './admin-member-update.component.html',
  styleUrls: ['./admin-member-update.component.scss']
})
export class AdminMemberUpdateComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<AdminMemberUpdateComponent>,@Inject(MAT_DIALOG_DATA) public data: {memberId:string} ,private _api:ApiService) { }

  ngOnInit(): void {
    console.log(this.data.memberId);
    this.getMember()
  }
  
  close() {
    this._matRef.close();
  }
  
  member: any = {};
  transBirthday: string='';
  async getMember() {
    try {
      const res: any = await this._api.getMember({
        memberId: this.data.memberId
      })
      console.log(res);
      this.member = res.data;
      this.transformBirthday(this.member.birthday)
    } catch (error) {
      console.log(error);
    }
  }

  transformBirthday(birthday) {
    let year = birthday.slice(0, 4);
    let month = birthday.slice(4, 6);
    let day = birthday.slice(6, 8);
    this.transBirthday = `${year}.${month}.${day}`;
  }
}

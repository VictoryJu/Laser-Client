import { AdminMemberComponent } from './../admin-member/admin-member.component';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
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
  
  //수정하기 yes or no 변수
  openStep = 1;

  //비밀번호 변경 변수
  passwordChangeStep = 1;

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

  async updateMember() {
    try {
      const res: any = await this._api.updateMember({
        id: 'admin',
        // password: 'admin1234',
        club: this.member.club,
        name: this.member.name,
        birthday: this.member.birthday,
        gender: this.member.gender,
        gunType: this.member.gunType,
        phone: this.member.phone,
        pphone: this.member.pphone,
        email: 'emptyData',
        address: this.member.address,
        zipCode: this.member.zipCode,
        memo: this.member.memo,
        level: this.member.level,
        point: this.member.point,
        status: this.member.status
      })
      if (res.code === 0) {
        this.openStep = 1;
        alert('회원정보 수정 완료');
      }
    } catch (e) {
      console.log(e);
    }
  }
}

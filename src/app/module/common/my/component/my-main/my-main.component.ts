import { ApiService } from 'src/app/service/api-service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../../../auth/component/change-password/change-password.component';
import { transformBirthday } from 'src/app/lib/utils';

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
  memberData: any = {}; //객체선언안하면 type오류남.. 이유모름
  transBirthday: string='';
  async getMyProfile() {
    try {
      const res: any = await this._api._user.getMyProfile();
      console.log(res);
      this.memberData = res.data;
      this.transBirthday= transformBirthday(this.memberData.birthday);
    } catch (error) {
      console.log(error);
    }
  }
  openStep = 1; //수정하기 버튼클릭시 step 단계 구분
  isOpenChangePw = false; // pw변경 버튼 클릭 유무
  oldPassword: string;
  changePassword: string;
  checkChangePassword: string;
  async updateMyProfile() {
    if (this.changePassword !== this.checkChangePassword) {
      alert('변경하시는 비밀번호가 일치하지 않습니다.');
      return
    }
    try {
      const res: any = await this._api._user.updateProfile({
        oldPassword: this.oldPassword,
        password: this.changePassword,
        club: this.memberData.club,
        name: this.memberData.name,
        birthday: this.memberData.birthday,
        gender: this.memberData.gender,
        gunType: this.memberData.gunType,
        phone: this.memberData.phone,
        pphone: this.memberData.pphone,
        email: this.memberData.email,
        address: this.memberData.address,
        zipCode: this.memberData.zipCode,
        level: this.memberData.level,
        point: this.memberData.point,
        status: this.memberData.status
      })
      console.log(res);
      if (res.code === 0 && !this.changePassword && !this.checkChangePassword) {
        if (!this.isOpenChangePw) {
          alert('수정완료!') //일반 데이터 수정 case
          this.openStep = 1;
          this.getMyProfile();
        }
        else{
          alert('변경하실 비밀번호를 입력해주세요'); //새로운 비번 입력안하고 변경버튼 누를경우
        }
      }
      else if (res.code === 0 && this.changePassword && this.checkChangePassword)  {
        alert('비밀번호 변경완료!') //비밀번호 변경 case
        this.openStep = 1;
        this.isOpenChangePw = false;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

import { ApiService } from 'src/app/service/api-service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit {

  constructor(public _mat:MatDialogRef<RegistComponent>,private _api:ApiService) { }

  ngOnInit(): void {
  }
  closeRegist(){
    this._mat.close();
  }


  Byear: unknown; // 생년월일 변수 year + month + day  합쳐서 하나의 문자열로 post
  Bmonth: unknown;
  Bday:unknown


  id: string;
  password: string;
  name: string;
  birthday: string;
  gender: number;
  gunType: number;
  phone: string;
  pphone: string;
  email: string;
  groupId: number;
  address: string;
  zipCode: string;
  async register() {
    this.birthday = `${this.Byear}${this.Bmonth}${this.Bday}`;
    try {
      const res: any = await this._api.register({
        id: this.id,
        password: this.password,
        name: this.name,
        birthday: this.birthday,
        gender: this.gender,
        gunType: this.gunType,
        phone: this.phone,
        pphone: this.pphone,
        email: this.email,
        groupId: this.groupId,
        address: this.address,
        zipCode: this.zipCode
      })
      console.log(res);
    } catch (e) {
      console.log(e);    
    }
  }
}

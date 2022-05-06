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

  _onAddress=false;;

  get onAddress(){
      return this._onAddress;
  }

  set onAddress(v){
      this._onAddress = v;
  }

  getAddress(data){
    console.log(data);
    this.address = data.address;
    this.zipCode = data.zipCode;
  }

  activeGenderType= false;
  selectGender= "남"

  activeGunType=false;
  selectGunType={name:"권총",id:0};
  gunTypeArr = [
        {
            name:"권총",
            id:0
        },
        {
            name:"소총",
            id:1
        }
    ]

  id: string;
  password: string;
  checkPassword:string;
  name: string;
  birthday: string;
  gender = 0;
  phone: string;
  pphone: string;
  email = new Date();
  groupId: number;
  address: string;
  zipCode: string;
  club:string;
  async register() {
    this.birthday = `${this.Byear}${this.Bmonth}${this.Bday}`;
    // if(!this.id || !this.password || !this.name || !this.birthday || !this.gender || !this.gunType || !this.phone || !this.pphone || !this.address || !this.zipCode){
    //     alert('미입력한 정보가 있습니다.')
    // }
    if(this.password !== this.checkPassword){
        alert('패스워드가 일치하지않습니다.')
    }
    let email = `${this.email.getTime().toString()}@naver.com`
    try {
      const res: any = await this._api.regist({
        id: this.id,
        password: this.password,
        club:this.club,
        name: this.name,
        birthday: this.birthday,
        gender: this.gender,
        gunType: this.selectGunType.id,
        email: email,
        phone: this.phone,
        pphone: this.pphone,
        address: this.address,
        zipCode: this.zipCode
      })
      if(res.code===0){
        alert('회원가입이 완료되었습니다.');
        this.closeRegist();
      }
    } catch (e) {
      console.log(e);    
    }
  }
}

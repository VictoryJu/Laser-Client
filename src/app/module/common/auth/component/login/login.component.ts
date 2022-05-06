import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getCookie, setCookie } from 'src/app/lib/utils';
import { ApiService } from 'src/app/service/api-service';
import { RegistComponent } from '../regist/regist.component';

interface loginInfo{
  id:string;
  password:string;
  lane:number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _mat:MatDialog, public _matRef:MatDialogRef<LoginComponent>, private _api:ApiService ) { }

  ngOnInit(): void {
      //지워줘야함
      this.openRegist();
  }
  openRegist(){
    this._mat.open(RegistComponent);
  }
  closeLogin(){
      this._matRef.close();
  }
  completeLogin(res){
    let userData = res
    this._matRef.close(userData);
    alert('로그인이 성공하였습니다.')
  }

  userId:string;
  userPassword:string;
  lane:1;
  isReqLogin=false;
  async login(){
    if(this.isReqLogin){
      return
    }
    if(!this.userId || !this.userPassword){
      alert('아이디와 패스워드를 입력해주세요.');
    }
    this.isReqLogin = true
    try{
      const res:any = await this._api.login({
        id: this.userId,
        password: this.userPassword,
        lane: this.lane
      });
      let data = res.data;
      if(res.code === 0){
        console.log(data);
        setCookie('SSID',data.sessionKey)
        this.completeLogin(data);
      }
    }catch(e){
        console.log(e)
    }
    this.isReqLogin = false;
  }


}

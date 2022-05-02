import { ApiService } from 'src/app/service/api-service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistComponent } from '../regist/regist.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _mat:MatDialog, public _matRef:MatDialogRef<LoginComponent>, private _api:ApiService) { }

  ngOnInit(): void {
  }
  openRegist(){
    this._mat.open(RegistComponent);
  }
  closeLogin(){
      this._matRef.close();
  }

  id: string;
  password: string;
  matchId: string;
  lane: number;
  async login() {
    try {
      const res: any = await this._api.login({
        id: this.id,
        password: this.password,
        matchId: this.matchId,
        lane: this.lane
      })
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
}

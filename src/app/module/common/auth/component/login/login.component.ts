import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistComponent } from '../regist/regist.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _mat:MatDialog, public _matRef:MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }
  openRegist(){
    this._mat.open(RegistComponent);
  }
  closeLogin(){
      this._matRef.close();
  }
}

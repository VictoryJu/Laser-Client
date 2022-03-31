import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public _mat:MatDialogRef<ChangePasswordComponent>) { }

  ngOnInit(): void {
  }
  closePassword(){
      this._mat.close();
  }
}

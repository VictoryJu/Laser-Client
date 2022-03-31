import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit {

  constructor(public _mat:MatDialogRef<RegistComponent>) { }

  ngOnInit(): void {
  }
  closeRegist(){
    this._mat.close();
  }
}

import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-select-lane',
  templateUrl: './admin-select-lane.component.html',
  styleUrls: ['./admin-select-lane.component.scss']
})
export class AdminSelectLaneComponent implements OnInit {

  constructor(public _mat:MatDialogRef<AdminSelectLaneComponent>) { }

  ngOnInit(): void {
      this.setArr();
  }

  closeLane() {
    this._mat.close();
  }

  arr = []
  setArr(){
      for(let i=0; i<80; i++){
        this.arr[i] = i+1
      }
  }

  isFinal = false;

  selectArr = [];
  selectLane(index){
    if(!this.selectArr.includes(index)){
        this.selectArr.push(index);
    }
  }
}

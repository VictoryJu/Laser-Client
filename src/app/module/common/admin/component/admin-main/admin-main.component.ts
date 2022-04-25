import { AdminSelectLaneComponent } from './../admin-select-lane/admin-select-lane.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  constructor(public _mat:MatDialog) { }

  ngOnInit(): void {
  }

  openLane() {
    this._mat.open(AdminSelectLaneComponent);
  }
}

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
  }

  closeLane() {
    this._mat.close();
  }
}

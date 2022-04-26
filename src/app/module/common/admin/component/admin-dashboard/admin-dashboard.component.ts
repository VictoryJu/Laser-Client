import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminSelectLaneComponent } from '../admin-select-lane/admin-select-lane.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public _mat:MatDialog) { }

  ngOnInit(): void {
      this.openLane();
  }

  openLane() {
    this._mat.open(AdminSelectLaneComponent);
  }

}

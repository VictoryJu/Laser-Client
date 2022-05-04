import { AdminMemberUpdateComponent } from './../admin-member-update/admin-member-update.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-member',
  templateUrl: './admin-member.component.html',
  styleUrls: ['./admin-member.component.scss']
})
export class AdminMemberComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<AdminMemberComponent>, public _mat:MatDialog) { }

  ngOnInit(): void {
  }

  close() { this._matRef.close() }
  

  openMemberDetail() {
    this._mat.open(AdminMemberUpdateComponent);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-member-update',
  templateUrl: './admin-member-update.component.html',
  styleUrls: ['./admin-member-update.component.scss']
})
export class AdminMemberUpdateComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<AdminMemberUpdateComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this._matRef.close();
  }
}

import { AdminMemberUpdateComponent } from './../admin-member-update/admin-member-update.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api-service';

@Component({
  selector: 'app-admin-member',
  templateUrl: './admin-member.component.html',
  styleUrls: ['./admin-member.component.scss']
})
export class AdminMemberComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<AdminMemberComponent>, public _mat:MatDialog, private _api:ApiService) { }

  ngOnInit(): void {
  }

  close() { this._matRef.close() }
  
  openMemberDetail() {
    this._mat.open(AdminMemberUpdateComponent);
  }



  searchType: number = 0;
  keyword: string;
  start: number = 0;
  limit: number = 10;
  async getMemberList() {
    try {
      const res: any = await this._api.getMemberList({
        searchType: this.searchType,
        keyword: this.keyword,
        start: this.start,
        limit: this.limit
      })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}

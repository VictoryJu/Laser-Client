import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api-service';


@Component({
  selector: 'app-admin-regist-player',
  templateUrl: './admin-regist-player.component.html',
  styleUrls: ['./admin-regist-player.component.scss']
})
export class AdminRegistPlayerComponent implements OnInit {

  constructor(public _matDialogRef: MatDialogRef<AdminRegistPlayerComponent>, private _api:ApiService, @Inject(MAT_DIALOG_DATA) public data:{gameId:string}) { }

  ngOnInit(): void {
      this.gameId = this.data.gameId
  }

  gameId:string;

  async getPlayer(){
    try{
        const res:any = this._api.getMemberList({
            searchType: 0,
            start: 0,
            limit: 10,
        })
        console.log(res);
        
    }catch(e){
        console.log(e)
    }
  }

  close() { this._matDialogRef.close(); }  
  
}

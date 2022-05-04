import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api-service';


@Component({
  selector: 'app-admin-regist-player',
  templateUrl: './admin-regist-player.component.html',
  styleUrls: ['./admin-regist-player.component.scss']
})
export class AdminRegistPlayerComponent implements OnInit {

  constructor(public _matDialogRef: MatDialogRef<AdminRegistPlayerComponent>, private _api:ApiService) { }

  ngOnInit(): void {
    
    
  }

  close() { this._matDialogRef.close(); }  
  
}

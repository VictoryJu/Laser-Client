import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-relay-game',
  templateUrl: './relay-game.component.html',
  styleUrls: ['./relay-game.component.scss']
})
export class RelayGameComponent implements OnInit {
  countByPlayers = {
    6: 3,
    4: 2,
    8: 4
  }

  constructor(public _router:ActivatedRoute) {
      this._router.queryParams.subscribe(params=>{
        if(params){
            this.players = parseInt(params.players);
            this.gameId = params.gameId;
        }
      })
   }

  ngOnInit(): void {
  }

  players:number;
  gameId:string;

}

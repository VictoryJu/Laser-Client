import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api-service';
import { SignalRService } from 'src/app/service/signal-r.service';
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

  constructor(public _route:ActivatedRoute, public _signal:SignalRService, private _api:ApiService, private _router:Router) {
      this._route.queryParams.subscribe(params=>{
        if(params){
            this.players = parseInt(params.players);
            this.gameId = params.gameId;
            this.setPlayers(this.players);
        }
      })
      this._signal.startConnection('main');
      this._signal.LaneDataListener();
   }

  ngOnInit(): void {
  }

  players:number;
  gameId:string;

  playersArr = [];
  setPlayers(players){
      for(let i = 0; i < players ; i++){
        this.playersArr.push(i);
      }
  }

  async gameStart(){
      try{
        const res:any = await this._api.startGame({matchId:this.gameId});
        console.log(res);
      }catch(e){
          console.log(e)
      }
  }

  openGameConfig(){
      this._router.navigate(['admin/main']);
  }
  
}

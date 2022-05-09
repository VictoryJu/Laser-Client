import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
        }
      })
      this._signal.startConnection('main');
      this._signal.MainDataListener().subscribe(msg=>{  
            this.series = msg.currentSeries;
            this.shot = msg.shot;
            this.defaultShot = msg.shot
            this.playersArr = msg.partA;
            this.playersArr.forEach(item=>{
                let historyTable = JSON.parse(item.history);
                let historyList = historyTable[this.series];
                item.historyList = historyList;
            })
            console.log(this.playersArr);
            console.log(this.history);
        })
   }
   @ViewChild('target',{ static: false }) target:ElementRef;
  ngOnInit(): void {

  }

  ngAfterViewInit(){
    setTimeout(()=>{
        this.setRate();
    },2000) 
  }


  setRate(){
      let rect = this.target.nativeElement.getBoundingClientRect()
      let width = rect.width;
      let height = rect.height;
      this._xRate = width / 817.45;
      this._yRate = height / 613;
      console.log(rect);
      
  }

  _xRate:number
  _yRate:number

  get xRate(){
      return this._xRate;
  }

  get yRate(){
      return this._yRate;
  }



  defaultShot:number;

  history:object;
  shot:number;
  series:number;
  players:number;
  gameId:string;

  playersArr = [];

  async gameStart(){
      try{
        const res:any = await this._api._game.startGame({matchId:this.gameId});
        console.log(res);
      }catch(e){
          console.log(e)
      }
  }

  openGameConfig(){
      this._router.navigate(['admin/main']);
  }
  
}

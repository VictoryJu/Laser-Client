import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { ApiService } from 'src/app/service/api-service';
import { SignalRService } from 'src/app/service/signal-r.service';
import { AdminGameConfigComponent } from '../admin-game-config/admin-game-config.component';

@Component({
  selector: 'app-admin-select-lane',
  templateUrl: './admin-select-lane.component.html',
  styleUrls: ['./admin-select-lane.component.scss']
})

export class AdminSelectLaneComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<AdminSelectLaneComponent>, private _router:Router, @Inject(MAT_DIALOG_DATA) public data:{matchId:string}, public _api:ApiService, public _mat:MatDialog, public _signal:SignalRService) { }

  ngOnInit(): void {
      this.setArr();
      this.matchId = this.data.matchId;
      console.log(this.matchId);
      
      this._signal.startConnection('main');
      this._signal.MainDataListener().subscribe(msg=>{  
        this.signalInfo = msg.partA;
        console.log(this.signalInfo);
        console.log('dasdasdasdsa');
        
        })
      this.getMathcInfo();
      console.log(this.mainInfo);
  }

  signalInfo:any;
  mainInfo:any;
  gameId = 'gameId'



  matchInfo = [];
  async getMathcInfo(){
      try{
        const res:any = await this._api.getMatch(this.matchId);
        this.matchInfo = [...res.data.partAGameMemberList];
        console.log(this.matchInfo);
      }catch(e){
          console.log(e)
      }
  }

  closeLane() {
    this._matRef.close();
  }

  callMain(){
      let result = this._signal.MainDataListener();
      console.log(result);
      
  }

  arr = []
  setArr(){
      for(let i=0; i<4; i++){
        this.arr[i] = i+1
      }
      // 시그널r 데이터 받아올때마다 갱신해주면됨.
      //this.arr = 
  }

  //게임이 끝났을때 조회해서 보여주기
  //끝났을때 startGame = false 해주어야함
  winners = [];
  async getWinners(){
      try{
        const res:any = await this._api.getWinners(this.matchId);
        this.winners = [...res.data.partsA];
        console.log(this.winners);
      }catch(e){
          console.log(e);
      }
  }

  isFinal = false;

  selectArr = [];
  selectLane(index){
    if(this.selectArr.includes(index)){
        let i = this.selectArr.indexOf(index);
        this.selectArr.splice(i,1);
    }else{
        this.selectArr.push(index);
        console.log(this.selectArr);
    }
  }

  startGame = false;
  async gameStart(){
      try{
        const res:any = await this._api.startGame({
            matchId: this.matchId
        });
        this.startGame = true;
        console.log(res);
      }catch(e){
          console.log(e)
      }
  }

  copyShowArrr=[];
  selectAGroup=[];
  selectBGroup=[];
  isAGroup=false;
  isBGroup=false;
  selectSemiFinal(index){
    console.log('실행함');
    if(this.isAGroup){
        if(this.selectAGroup.includes(index)){
            let i = this.selectAGroup.indexOf(index);
            this.selectAGroup.splice(i,1);
            //A그룹만 선택해도 B그룹 만들어주는 로직
            this.copyShowArrr.push(i);
        }else if(this.selectAGroup?.length < this.selectArr?.length / 2){
            this.selectAGroup.push(index);
            //A그룹만 선택해도 B그룹 만들어주는 로직
            let i = this.copyShowArrr.indexOf(index);
            this.copyShowArrr.splice(i,1);
        }
    }
    // if(this.isBGroup){
    //     if(this.selectBGroup.includes(index)){
    //         let i = this.selectBGroup.indexOf(index);
    //         this.selectBGroup.splice(i,1);
    //     }else{
    //         this.selectBGroup.push(index);
    //         console.log(this.selectBGroup);
    //     }
    // }
    console.log(this.copyShowArrr); 
  }

  matchId:string;

  openGame(){
    this.closeLane();
  }
}

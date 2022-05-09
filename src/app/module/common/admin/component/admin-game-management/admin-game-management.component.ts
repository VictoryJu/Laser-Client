import { AdminRegistPlayerComponent } from './../admin-regist-player/admin-regist-player.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api-service';

@Component({
  selector: 'app-admin-game-management',
  templateUrl: './admin-game-management.component.html',
  styleUrls: ['./admin-game-management.component.scss']
})
export class AdminGameManagementComponent implements OnInit {

  constructor(public _matDialogRef:MatDialogRef<AdminGameManagementComponent>, public _mat:MatDialog, private _api:ApiService) { }

  ngOnInit(): void {
      this.getCompetitionList();
      this.setDay();
  }

  close() {
    this._matDialogRef.close();
  }
  openRegistPlayer(gameId) {
    this._mat.open(AdminRegistPlayerComponent,{
        data: gameId
    });
  }

  selectOption(data){
    this.year = data;
  }

  yearArr = [];
  monthArr = [];
  dayArr = [];
  setDay(){
    for(let i=1; i<13 ; i++){
        this.monthArr.push(i);
    }
    for(let i=1; i<32 ; i++){
        this.dayArr.push(i);
    }
    for(let i=2022; i<2030 ; i++){
        this.yearArr.push(i);
    }
  }

  CompetitionName:string;
  year = 2022;
  month = new Date().getMonth()+1;
  day = new Date().getDay()+1;
  hour:number;
  min:number;
  isReqCreate=false;

  async createCompetition(){
    if(!this.CompetitionName){
        alert('대회 이름을 입력해주세요.')
        return
    }
    if(this.isReqCreate){
        return
    }
    this.isReqCreate = true
    try{
        let startTime = `${this.year}${this.month}${this.day}${this.hour}${this.min}00`
        const res:any = await this._api._game.createCompetition({
            name: this.CompetitionName,
            startTime: startTime
        })
        console.log(res);
        this.getCompetitionList();
    }catch(e){
        console.log(e)
    }
  }

  competitionArr=[];
  async getCompetitionList(){
    try{
        const res:any = await this._api._game.getCompetition()
        this.competitionArr = [...res.datas];
        console.log(res.datas);
        
    }catch(e){
        console.log(e);
        
    }
  }
}
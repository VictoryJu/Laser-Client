import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { matClose } from 'src/app/lib/utils';
import { ApiService } from 'src/app/service/api-service';
import { AdminSelectLaneComponent } from '../admin-select-lane/admin-select-lane.component';
@Component({
  selector: 'app-admin-game-config',
  templateUrl: './admin-game-config.component.html',
  styleUrls: ['./admin-game-config.component.scss']
})
export class AdminGameConfigComponent implements OnInit {

  constructor(private _api:ApiService, private _router:Router, public _matRef:MatDialogRef<AdminGameConfigComponent>, public _mat:MatDialog) { }

  ngOnInit(): void {
    this.getPresets();
    this.getLaneInfo();
  } 

    
    
  presets = [];
  qualifier = [];
  finals = [];
  matchTitle = "결선 선발전"
  async getPresets(){
      try{
        const res:any = await this._api.getPresets();
        console.log(res);
        this.presets = [...res.datas];
        this.presets.map(item=>{
            if(item.name === "Finals") item.title = "결선 2부"
            return item;
        });
        let qualifierObj = {
            id : 10,
            time : 600,
            shot : 10,
            series : 1,
            name : "결선 선발전"
        };
        let semiFinalObj = [
            {
                id: 30,
                time : 300,
                shot : 5,
                series : 4,
                name : "결선 1부"
            },
            {
                id: 40,
                time : 60,
                shot : 1,
                series : 0,
                name : "결선 2부"
            }
        ];
        this.qualifier.push(qualifierObj);
        this.finals = [...semiFinalObj];
        this.selectPreset(qualifierObj);
      }catch(e){
          console.log(e);
      }
  }

  preset = {time:600,shot:10,series:1, id:10};
  selectPreset(prestes){
    console.log(prestes);
    this.preset.id = prestes.id
    this.preset.time = prestes.time;
    this.preset.shot = prestes.shot;
    this.preset.series = prestes.series;
  }

  people = 4;
  passPeople = 2;

  activeMatchType=false;
  isFinal = false;

  selectAGroup = [];
  selectBGroup = [];
  isAGroup = false;
  isBGroup = false;
  selectSemiFinal(index){
    console.log(index);
    if(this.isAGroup){
        if(this.selectAGroup.includes(index)){
            let i = this.selectAGroup.indexOf(index);
            this.selectAGroup.splice(i,1);
            //A그룹만 선택해도 B그룹 만들어주는 로직
            // this.copyShowArrr.push(i);
        }else{
            this.selectAGroup.push(index);
            //A그룹만 선택해도 B그룹 만들어주는 로직
            // let i = this.copyShowArrr.indexOf(index);
            // this.copyShowArrr.splice(i,1);
        }
    }
    if(this.isBGroup){
        if(this.selectBGroup.includes(index)){
            let i = this.selectBGroup.indexOf(index);
            this.selectBGroup.splice(i,1);
        }else{
            this.selectBGroup.push(index);
            console.log(this.selectBGroup);
        }
    }
  }

  matchId:string;
  async createGame(){
      try{
          console.log('실행');
          
        const res:any = await this._api.createGame({
            matchType:this.preset.id,
            personnel: this.people,
            personnelOfPass: this.passPeople,
            partA: this.selectAGroup
        });
        this.matchId = res.data.matchId;
        if(this.isFinal){
            this.openGame();
        }
        else{
            const dialogRef = this._mat.open(AdminSelectLaneComponent,{
                data:{matchId : this.matchId}
            });
            dialogRef.afterClosed().subscribe(result=>{
                if(result){
                    console.log('끝');
                }
            })
        }
      }
      catch(e){
          console.log(e)
      }
  }

  laneInfo = [];
  async getLaneInfo(){
      try{
        const res:any = await this._api.getLaneInfo();
        this.laneInfo = [...res.datas];
      }catch(e){
          console.log(e);
      }
  }

  openEntry
  openGame(){
    if(this.isFinal)
    this._router.navigate(['/admin/relay/'],{queryParams:{players:this.people, gameId:this.matchId}});
    this._matRef.close();
  }

  closeConfig(){
      matClose(this._matRef);
  }
}

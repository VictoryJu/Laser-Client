import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-admin-select-lane',
  templateUrl: './admin-select-lane.component.html',
  styleUrls: ['./admin-select-lane.component.scss']
})
export class AdminSelectLaneComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<AdminSelectLaneComponent>, private _router:Router) { }

  ngOnInit(): void {
      this.setArr();
  }

  gameId = 'gameId'

  closeLane() {
    this._matRef.close();
  }

  arr = []
  setArr(){
      for(let i=0; i<80; i++){
        this.arr[i] = i+1
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
  sortArr(){
      if(this.selectArr?.length < 1){
          alert('레인을 선택해주세요.')
      }else{
        this.selectArr.sort();
        this.copyShowArrr = [...this.selectArr];
        this.isFinal = true;
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


  openGame(){
    this._router.navigate(['/admin/relay/'],{queryParams:{players:this.selectArr?.length, gameId:this.gameId}});
    this.closeLane();
  }
}

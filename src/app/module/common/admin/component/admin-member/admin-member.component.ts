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
    this.getMemberList()
    //TODO 회원정보 수정 시 맴버리스트 재 호출
  }

  close() { this._matRef.close() }
  
  openMemberDetail(memberId) {
    this._mat.open(AdminMemberUpdateComponent, {
      data:{memberId} //key,value가 같으면 value값 생략 가능
    });
  }



  searchType: number = 0;
  keyword: string = '';     
  start: number = 0;
  limit: number = 10;
  init: boolean = false;
  allCount: number;
  memberList:Array<any> = [];
  async getMemberList(init?:boolean) { //해당 함수를 호출할때 arg값이 있으면 초기화된 리스트 출력
    if (init) {
      this.searchType = 0;
      this.start = 0;
      this.limit = 10;
      this.keyword = '';
    }
    try {
      const res: any = await this._api.getMemberList({
        searchType: this.searchType,
        keyword: this.keyword,
        start: this.start,
        limit: this.limit
      })
      this.memberList = res.datas;
      this.allCount = res.total_cnt;
      console.log(res);
      if (res.total_cnt === 0) {
        alert('해당 회원은 존재하지 않습니다.');
        return
      }
    } catch (e) {
      if(e.error.code -1) alert('관리자 id로 로그인 해주세요.')
      console.log(e);
    }
  }

  
  selectOption(data: string) { 
    data === '이름' ? this.searchType = 1
      : data === '아이디' ? this.searchType = 2
      : data === '전화번호' ? this.searchType = 3
      : null
    console.log(this.searchType);
    
  }
  selectOptions = [
    {name:'이름', value:1},
    {name:'아이디', value:2},
    {name:'전화번호', value:3},
  ]
}

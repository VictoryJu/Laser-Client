import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api-service';
import { AdminModalComponent } from '../admin-modal/admin-modal.component';

@Component({
  selector: 'app-admin-group-board',
  templateUrl: './admin-group-board.component.html',
  styleUrls: ['./admin-group-board.component.scss']
})
export class AdminGroupBoardComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<AdminModalComponent>, public _mat:MatDialog, private _api:ApiService) {

  }
  @ViewChild('adminModal') adminModal:AdminModalComponent;
  ngOnInit(): void {
    this.getClubList();
  }

  activeModal = false;
  activeAddGroup = false;
  activeEditModal = false;
  updateUser = false;


  searchType: number = 0;
  keyword: string = '';     
  start: number = 0;
  limit: number = 10;
  init: boolean = false;
  allCount: number;
  clubList:Array<any> = [];

  async getClubList(init?: boolean) {
    if (init) {
      this.searchType = 0;
      this.start = 0;
      this.limit = 10;
      this.keyword = '';
    }
    try {
      const res: any = await this._api.getClubList({
        searchType: this.searchType,
        keyword: this.keyword,
        start: this.start,
        limit: this.limit
      })
      console.log(res);
      this.clubList = res.datas;
      this.allCount = res.total_cnt;
    } catch (e) {
      console.log(e);
    }
  }

  image;
  base64Image;
  showImageArr = []; //등록페이지에서 썸네일만 보여주는 리스트
  uploadBlock = true;
  //밑에 두개 이미지등록함수
  changeUpload($event) : void {
    this.readThis($event.target);
    // console.log($event.target.files);
    
  }
  saveImg:any = []; //실제로 등록되는 이미지 리스트
  readThis(inputValue: any): void {
    // for (let i = 0; i < inputValue.files.length; i++) {
      
      var file:File = inputValue.files[0];
      var myReader:FileReader = new FileReader();
      // console.log(file);
      // this.saveImg.push(file)
      
      myReader.onloadend = (e) => {
        this.image = myReader.result;
        this.showImageArr.unshift(this.image)
        console.log(this.showImageArr);
        
        this.base64Image = this.image.split(',')[1]
        this.saveImg.unshift(this.base64Image)
        //인코딩된이미지
        console.log(this.saveImg);
        if (this.showImageArr.length >= 10) {
        alert('이미지는 최대 10장의 사진만 등록할 수 있습니다.')
          this.uploadBlock = false;
        }
      }
      if (!this.uploadBlock) {
        return
      }
      myReader.readAsDataURL(file);
    // }
    
  }
  selectOptions = [
    {name:'이름', value:1}
  ]
}

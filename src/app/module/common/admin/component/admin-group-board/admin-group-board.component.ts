import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminModalComponent } from '../admin-modal/admin-modal.component';

@Component({
  selector: 'app-admin-group-board',
  templateUrl: './admin-group-board.component.html',
  styleUrls: ['./admin-group-board.component.scss']
})
export class AdminGroupBoardComponent implements OnInit {

  constructor(public _matRef:MatDialogRef<AdminModalComponent>, public _mat:MatDialog) {
    console.log(this._matRef._containerInstance);

   }
   @ViewChild('adminModal') adminModal:AdminModalComponent;
  ngOnInit(): void {
      console.log(this._matRef);      
  }

  activeModal = false;
  activeAddGroup = false;
  activeEditModal = false;
  updateUser = false;

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
}

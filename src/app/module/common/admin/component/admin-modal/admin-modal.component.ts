import { MatDialogRef } from '@angular/material/dialog';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { matClose } from 'src/app/lib/utils';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss']
})
export class AdminModalComponent implements OnInit {

  constructor(public _matDialogRef:MatDialogRef<AdminModalComponent>,) {
    }

  ngOnInit(): void {

    }

close() {
    this._matDialogRef.close();
  }
  
  @Input() title: string;
  @Input() isNeedBorder = true; //보더 유무
  @Input() subTitle?: string;
  @Input() refData?: any;
  @Input() isConfig? = true;
  @Output() isClose = new EventEmitter();

  closeModal(){
      this.isClose.emit(false);
  }
}

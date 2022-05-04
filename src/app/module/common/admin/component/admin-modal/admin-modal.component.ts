import { MatDialogRef } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { matClose } from 'src/app/lib/utils';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss']
})
export class AdminModalComponent implements OnInit {

  constructor(public _matDialogRef:MatDialogRef<AdminModalComponent>) { }

  ngOnInit(): void {
  }
  close() {
    console.log(this.refData);
    this._matDialogRef.close();
    // matClose(this.refData);
  }
  @Input() title: string;
  @Input() isNeedBorder?: boolean = true; //보더 유무
  @Input() subTitle?: string;
  @Input() refData?: any;
}

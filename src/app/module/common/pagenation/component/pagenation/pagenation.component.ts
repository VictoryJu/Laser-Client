import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.scss']
})
export class PagenationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get pageNationNow() {
    return Math.floor(this.start / this.limit);
  }

  get pageNationLast() {
    return Math.floor((this.allCount - 1) / this.limit); //count에서 limit을 나누고 -1이아닌 왜 나누기전 -1인지 모르겠음.
  }

  min = Math.min;
  max = Math.max;

  get pageNationArray() {
    const arr = new Array();
    const now = this.pageNationNow;
    const last = this.pageNationLast;

    let start = Math.max(0, now - 4);
    let end = Math.min(last + 1, start + 9);
    if (end === last + 1) {
      start = Math.max(0, end - 9);
    }
    for (let i = start; i < end; i++) {
      arr.push(i);
    }
    return arr;
  }

  @Input() start: number; // 0
  @Input() limit: number; // 15
  @Input() allCount: number;

  @Output() change = new EventEmitter<number>();
}

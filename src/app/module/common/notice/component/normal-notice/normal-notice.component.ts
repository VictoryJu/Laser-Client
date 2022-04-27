import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-normal-notice',
  templateUrl: './normal-notice.component.html',
  styleUrls: ['./normal-notice.component.scss']
})
export class NormalNoticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() notice: string;
}

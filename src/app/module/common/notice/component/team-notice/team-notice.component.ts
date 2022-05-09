import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-notice',
  templateUrl: './team-notice.component.html',
  styleUrls: ['./team-notice.component.scss']
})
export class TeamNoticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() notice: string;

}

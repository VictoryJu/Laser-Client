import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalNoticeComponent } from './component/normal-notice/normal-notice.component';
import { TeamNoticeComponent } from './component/team-notice/team-notice.component';
import { RankingNoticeComponent } from './component/ranking-notice/ranking-notice.component';



@NgModule({
  declarations: [NormalNoticeComponent, TeamNoticeComponent, RankingNoticeComponent],
  imports: [
    CommonModule
  ],
  exports: [NormalNoticeComponent, TeamNoticeComponent, RankingNoticeComponent]
})
export class NoticeModule { }

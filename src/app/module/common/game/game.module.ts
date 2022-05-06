import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameMainComponent } from './component/game-main/game-main.component';
import { GameConfigComponent } from './component/game-config/game-config.component';
import { FormsModule } from '@angular/forms';
import { GameTargetConfigComponent } from './component/game-target-config/game-target-config.component';
import { GameZeroConfigComponent } from './component/game-zero-config/game-zero-config.component';
import { NoticeModule } from '../notice/notice.module';



@NgModule({
  declarations: [
    GameMainComponent,
    GameConfigComponent,
    GameTargetConfigComponent,
    GameZeroConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NoticeModule
  ],
  exports: [
    GameMainComponent,
    GameMainComponent,
    GameTargetConfigComponent,
    GameZeroConfigComponent
  ]
})
export class GameModule { }

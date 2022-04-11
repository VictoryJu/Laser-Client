import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameMainComponent } from './component/game-main/game-main.component';
import { GameConfigComponent } from './component/game-config/game-config.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GameMainComponent,
    GameConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    GameMainComponent,
    GameMainComponent
  ]
})
export class GameModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowGameMainPageComponent } from './component/show-game-main-page/show-game-main-page.component';
import { LayoutModule } from '../../common/layout/layout.module';
import { GameModule } from '../../common/game/game.module';
import { AuthModule } from '../../common/auth/auth.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ShowGameMainPageComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    LayoutModule,
    GameModule,
    RouterModule.forChild([
      {path: '',component:ShowGameMainPageComponent}
    ])
  ]
})
export class GamePageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './component/layout/layout.component';
import { GameModule } from '../game/game.module';



@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    GameModule
  ],
  exports:[
    LayoutComponent,
 
  ]
})
export class LayoutModule { }

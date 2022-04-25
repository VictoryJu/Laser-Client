import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelayGameComponent } from './component/relay-game/relay-game.component';
import { AdminMainComponent } from './component/admin-main/admin-main.component';



@NgModule({
  declarations: [
    RelayGameComponent,
    AdminMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
      RelayGameComponent
  ]
})
export class AdminModule { }

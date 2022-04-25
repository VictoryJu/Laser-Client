import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelayGameComponent } from './component/relay-game/relay-game.component';
import { AdminMainComponent } from './component/admin-main/admin-main.component';
import { AdminSelectLaneComponent } from './component/admin-select-lane/admin-select-lane.component';



@NgModule({
  declarations: [
    RelayGameComponent,
    AdminMainComponent,
    AdminSelectLaneComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    RelayGameComponent,
    AdminMainComponent,
    AdminSelectLaneComponent
  ]
})
export class AdminModule { }

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelayGameComponent } from './component/relay-game/relay-game.component';
import { AdminMainComponent } from './component/admin-main/admin-main.component';
import { AdminSelectLaneComponent } from './component/admin-select-lane/admin-select-lane.component';
import { MatRippleModule } from '@angular/material/core';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    RelayGameComponent,
    AdminMainComponent,
    AdminSelectLaneComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule
  ],
  exports:[
    RelayGameComponent,
    AdminMainComponent,
    AdminSelectLaneComponent,
    AdminDashboardComponent
  ]
})
export class AdminModule { }

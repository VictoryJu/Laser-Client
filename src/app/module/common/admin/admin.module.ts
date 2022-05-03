import { AdminNetworkConfigComponent } from './component/admin-network-config/admin-network-config.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelayGameComponent } from './component/relay-game/relay-game.component';
import { AdminMainComponent } from './component/admin-main/admin-main.component';
import { AdminSelectLaneComponent } from './component/admin-select-lane/admin-select-lane.component';
import { MatRippleModule } from '@angular/material/core';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminGameConfigComponent } from './component/admin-game-config/admin-game-config.component';
import { FormsModule } from '@angular/forms';
import { AdminGroupBoardComponent } from './component/admin-group-board/admin-group-board.component';
import { AdminModalComponent } from './component/admin-modal/admin-modal.component';
import { AdminQualifierComponent } from './component/admin-qualifier/admin-qualifier.component';




@NgModule({
  declarations: [
    RelayGameComponent,
    AdminMainComponent,
    AdminSelectLaneComponent,
    AdminDashboardComponent,
    AdminGameConfigComponent,
    AdminGroupBoardComponent,
    AdminNetworkConfigComponent,
    AdminModalComponent,
    AdminQualifierComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule,
    FormsModule
  ],
  exports:[
    RelayGameComponent,
    AdminMainComponent,
    AdminSelectLaneComponent,
    AdminDashboardComponent,
    AdminGroupBoardComponent,
    AdminNetworkConfigComponent,
    AdminModalComponent,
    AdminQualifierComponent
  ]
})
export class AdminModule { }

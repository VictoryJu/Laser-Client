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
import { MyModule } from '../my/my.module';
import { AdminQualifierComponent } from './component/admin-qualifier/admin-qualifier.component';
import { AdminMemberComponent } from './component/admin-member/admin-member.component';
import { AdminMemberUpdateComponent } from './component/admin-member-update/admin-member-update.component';
import { AdminGameManagementComponent } from './component/admin-game-management/admin-game-management.component';
import { AdminRegistPlayerComponent } from './component/admin-regist-player/admin-regist-player.component';
import { PagenationModule } from '../pagenation/pagenation.module';
import { AdminGroupUpdateComponent } from './component/admin-group-update/admin-group-update.component';




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
    AdminQualifierComponent,
    AdminMemberComponent,
    AdminMemberUpdateComponent,
    AdminGameManagementComponent,
    AdminRegistPlayerComponent,
    AdminGroupUpdateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule,
    FormsModule,
    MyModule,
    PagenationModule
  ],
  exports:[
    RelayGameComponent,
    AdminMainComponent,
    AdminSelectLaneComponent,
    AdminDashboardComponent,
    AdminGroupBoardComponent,
    AdminNetworkConfigComponent,
    AdminModalComponent,
    AdminQualifierComponent,
    AdminMemberComponent,
    AdminMemberUpdateComponent,
    AdminGameManagementComponent,
    AdminRegistPlayerComponent,
    AdminGroupUpdateComponent,
  ]
})
export class AdminModule { }

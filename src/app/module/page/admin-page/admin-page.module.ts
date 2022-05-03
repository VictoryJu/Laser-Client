import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminManagementGamePageComponent } from './component/admin-management-game-page/admin-management-game-page.component';
import { LayoutModule } from '../../common/layout/layout.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminModule } from '../../common/admin/admin.module';
import { RouterModule } from '@angular/router';
import { AdminMainPageComponent } from './component/admin-main-page/admin-main-page.component';
import { AdminShowSelectLanePageComponent } from './component/admin-show-select-lane-page/admin-show-select-lane-page.component';
import { AdminLayoutModule } from '../../common/admin-layout/admin-layout.module';
import { RelayGameComponent } from '../../common/admin/component/relay-game/relay-game.component';
import { AdminQualifierPageComponent } from './component/admin-qualifier-page/admin-qualifier-page.component';



@NgModule({
  declarations: [
    AdminManagementGamePageComponent,
    AdminMainPageComponent,
    AdminShowSelectLanePageComponent,
    AdminQualifierPageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AdminLayoutModule,
    MatDialogModule,
    AdminModule,
    RouterModule.forChild([
      {path: '', component: AdminManagementGamePageComponent },
      {path: 'main', component: AdminMainPageComponent },
      {path: 'lane', component: AdminShowSelectLanePageComponent},
      {path: 'relay', component: RelayGameComponent },
      {path: 'qualifier', component: AdminQualifierPageComponent}
    ])
  ]
})
export class AdminPageModule { }

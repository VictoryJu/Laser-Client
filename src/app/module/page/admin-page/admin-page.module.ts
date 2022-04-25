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



@NgModule({
  declarations: [
    AdminManagementGamePageComponent,
    AdminMainPageComponent,
    AdminShowSelectLanePageComponent
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
      {path: 'lane', component: AdminShowSelectLanePageComponent}
    ])
  ]
})
export class AdminPageModule { }

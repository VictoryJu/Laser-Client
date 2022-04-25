import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminManagementGamePageComponent } from './component/admin-management-game-page/admin-management-game-page.component';
import { LayoutModule } from '../../common/layout/layout.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminModule } from '../../common/admin/admin.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminManagementGamePageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatDialogModule,
    AdminModule,
    RouterModule.forChild([
        {path:'',component:AdminManagementGamePageComponent}
    ])
  ]
})
export class AdminPageModule { }

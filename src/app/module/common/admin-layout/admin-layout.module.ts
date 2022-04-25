import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './component/admin-layout/admin-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      AdminLayoutComponent
  ]
})
export class AdminLayoutModule { }

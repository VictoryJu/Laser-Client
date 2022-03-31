import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './component/layout/layout.component';



@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutComponent,
 
  ]
})
export class LayoutModule { }

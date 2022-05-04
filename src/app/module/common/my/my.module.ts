import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMainComponent } from './component/my-main/my-main.component';



@NgModule({
  declarations: [
    MyMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
      MyMainComponent
  ]
})
export class MyModule { }

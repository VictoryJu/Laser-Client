import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMainComponent } from './component/my-main/my-main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
      MyMainComponent
  ]
})
export class MyModule { }

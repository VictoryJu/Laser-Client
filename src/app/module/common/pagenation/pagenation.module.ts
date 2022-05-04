import { RouterModule } from '@angular/router';
import { PagenationComponent } from './component/pagenation/pagenation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PagenationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PagenationComponent
  ]
})
export class PagenationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressSearchComponent } from './component/address-search/address-search.component';



@NgModule({
  declarations: [
    AddressSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      AddressSearchComponent
  ]
})
export class AddressSearchModule { }

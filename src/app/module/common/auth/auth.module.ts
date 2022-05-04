import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegistComponent } from './component/regist/regist.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegistComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    RegistComponent
  ]
})
export class AuthModule { }

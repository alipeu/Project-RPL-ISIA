import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSchPage } from './login-sch';

@NgModule({
  declarations: [
    LoginSchPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSchPage),
  ],
})
export class LoginSchPageModule {}

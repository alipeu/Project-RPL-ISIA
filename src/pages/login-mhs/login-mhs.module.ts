import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginMhsPage } from './login-mhs';

@NgModule({
  declarations: [
    LoginMhsPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginMhsPage),
  ],
})
export class LoginMhsPageModule {}

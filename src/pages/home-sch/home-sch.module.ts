import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeSchPage } from './home-sch';

@NgModule({
  declarations: [
    HomeSchPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeSchPage),
  ],
})
export class HomeSchPageModule {}

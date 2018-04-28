import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeMhsPage } from './home-mhs';

@NgModule({
  declarations: [
    HomeMhsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeMhsPage),
  ],
})
export class HomeMhsPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-home-mhs',
  templateUrl: 'home-mhs.html',
})
export class HomeMhsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeMhsPage');
  }
  onLoadProfile(){  
    this.menuCtrl.enable(true);
    this.menuCtrl.open();
  }
}

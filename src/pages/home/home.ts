import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginMhsPage } from '../login-mhs/login-mhs';
import { LoginSchPage } from '../login-sch/login-sch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }
  onLoadLoginMhs(){
    this.navCtrl.push(LoginMhsPage);
  }
  onLoadLoginSch(){
    this.navCtrl.push(LoginSchPage);
  }
  
}


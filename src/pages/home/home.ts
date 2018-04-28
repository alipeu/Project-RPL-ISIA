import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginMhsPage } from '../login-mhs/login-mhs';
import { LoginSchPage } from '../login-sch/login-sch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  onLoadLoginMhs(){
    this.navCtrl.push(LoginMhsPage);
  }
  onLoadLoginSch(){
    this.navCtrl.push(LoginSchPage);
  }
  
}


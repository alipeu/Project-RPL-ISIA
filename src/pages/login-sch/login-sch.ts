import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeSchPage } from '../home-sch/home-sch';

/**
 * Generated class for the LoginSchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-sch',
  templateUrl: 'login-sch.html',
})
export class LoginSchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginSchPage');
  }

  onLoadHomeSch(){
    this.navCtrl.push(HomeSchPage);
  }

}

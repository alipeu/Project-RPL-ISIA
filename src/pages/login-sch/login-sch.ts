import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginSchPage');
  }

  presentLoadingHomeSch() {
    let loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.navCtrl.push(HomeSchPage);
    }, 1500);
  
    setTimeout(() => {
      loading.dismiss();
    }, 1500);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomeMhsPage } from '../home-mhs/home-mhs';

/**
 * Generated class for the LoginMhsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-mhs',
  templateUrl: 'login-mhs.html',
})
export class LoginMhsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginMhsPage');
  }

  presentLoadingHomeMhs() {
    let loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.navCtrl.push(HomeMhsPage);
    }, 1500);
  
    setTimeout(() => {
      loading.dismiss();
    }, 1500);
  }
}

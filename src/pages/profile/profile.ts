import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import { HomeMhsPage } from '../home-mhs/home-mhs';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  onLoadHomeMhs(){
  this.navCtrl.push(HomeMhsPage);
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Successfull!',
      subTitle: 'Edit profile success.',
      buttons: ['OK']
    });
    alert.present();
  }
}


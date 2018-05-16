import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import { HomeMhsPage } from '../home-mhs/home-mhs';

import { Data } from '../../provider/data';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  nama_mhs: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public dataSt: Data
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewWillEnter() {
    this.dataSt.getDataUser().then((data) => {
      this.nama_mhs = data.nama_mhs;
    })
    console.log(this.nama_mhs)
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


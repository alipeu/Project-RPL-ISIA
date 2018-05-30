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
  nim: any;
  mayor: any;
  semester: any;
  ipk: any;
  ukt: any;
  alamat: any;
  email: any;
  telepon: any;

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
    this.dataSt.getData().then((data) => {
      console.log(data);
      this.nama_mhs = data.nama_mhs;
      this.nim = data.nim;
      this.mayor = data.mayor;
      this.semester = data.semester;
      this.ipk = data.ipk;
      this.ukt = data.ukt;
      this.alamat = data.alamat;
      this.email = data.userid + '@apps.ipb.ac.id';
      this.telepon = data.telepon;
    })
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


import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import { PostPage } from '../post/post';
import { EditPostPage } from '../edit-post/edit-post';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-home-sch',
  templateUrl: 'home-sch.html',
})
export class HomeSchPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }
  onLoadPost(){
    this.navCtrl.push(PostPage);
  }
  onLoadEditPost(){
    this.navCtrl.push(EditPostPage);
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hapus',
      subTitle: 'Apakah Anda yakin menghapus post ini?',
      buttons: ['YA', 'TIDAK']
    });
    alert.present();
  }

  onLoadHome(){
    this.navCtrl.push(HomePage);
  }
}

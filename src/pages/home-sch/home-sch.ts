import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
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
    public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeSchPage');
  }

  openMenu(){  
    this.menuCtrl.enable(true);
    this.menuCtrl.open();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostPage } from '../post/post';

/**
 * Generated class for the HomeSchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-sch',
  templateUrl: 'home-sch.html',
})
export class HomeSchPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }
  onLoadPost(){
    this.navCtrl.push(PostPage);
  }
}

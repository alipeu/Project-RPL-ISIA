import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-home-mhs',
  templateUrl: 'home-mhs.html',
})
export class HomeMhsPage {
 
  searchQuery: string = '';
  items: string[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
  }

  initializeItems() {
    this.items = [
      'Tanoto',
      'PPA'
    ];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeMhsPage');
  }

  openMenu(){  
    this.menuCtrl.enable(true);
    this.menuCtrl.open();
  }
  
  onCancel() {
    this.navCtrl.push(ProfilePage);
  }
  onLoadDetail() {
    this.navCtrl.push(DetailPage);
  }

  getItems(ev: any) {
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

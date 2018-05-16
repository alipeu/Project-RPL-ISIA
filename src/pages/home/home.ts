import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginMhsPage } from '../login-mhs/login-mhs';
import { LoginSchPage } from '../login-sch/login-sch';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public http: Http
  ) {
    this.menuCtrl.enable(false);
    this.testAPI();
  }
  
  onLoadLoginMhs(){
    this.navCtrl.push(LoginMhsPage);
  }
  
  onLoadLoginSch(){
    this.navCtrl.push(LoginSchPage);
  }

  testAPI(){
    this.http.get("http://localhost/rest_api/connect2db.php").subscribe(data => {
      console.log(data);
    });
  }
}


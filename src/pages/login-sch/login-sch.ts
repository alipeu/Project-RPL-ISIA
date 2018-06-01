import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, App } from 'ionic-angular';
import { HomeSchPage } from '../home-sch/home-sch';
import { Http } from '@angular/http';
import { MyApp } from '../../app/app.component';
import { Data } from '../../provider/data';

@IonicPage()
@Component({
  selector: 'page-login-sch',
  templateUrl: 'login-sch.html',
})
export class LoginSchPage {

  data: any = {};

  constructor(
    public app: App,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public http: Http,
    public dataStorage: Data
  ) {
    this.data.userid = "";
    this.data.password = "";
    this.data.response = "";
    this.http = http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginSchPage');
  }

  login() {
    var link = 'http://localhost/rest_api/loginp.php';
    var prvlogin = JSON.stringify({userid: this.data.userid, password: this.data.password});
    console.log(prvlogin);
    this.http.post(link, prvlogin).subscribe(data => {
      let response = data.json();
      // this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      if(response.status == "200") {
        console.log(response.data);
        this.dataStorage.login(response.data, "user");
        this.loading();
        this.app.getRootNav().setRoot(MyApp);
      } 
      else {
        // If account not found
        let toast = this.toastCtrl.create({
          message: 'Harap cek kembali user ID atau password Anda.',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }, error => {
      console.log("Oooops!");
    });
  }

  loading() {
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

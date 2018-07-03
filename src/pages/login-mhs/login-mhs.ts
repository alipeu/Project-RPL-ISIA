import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, App } from 'ionic-angular';
import { HomeMhsPage } from '../home-mhs/home-mhs';
import { Http } from '@angular/http';
import { MyApp } from '../../app/app.component';
import { Data } from '../../provider/data';

@IonicPage()
@Component({
  selector: 'page-login-mhs',
  templateUrl: 'login-mhs.html',
})

export class LoginMhsPage {

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
    console.log('ionViewDidLoad LoginMhsPage');
  }

  login() {
    var link = 'http://localhost/rest_api/login.php';
    var mhslogin = JSON.stringify({userid: this.data.userid, password: this.data.password});
    console.log(mhslogin);
    this.http.post(link, mhslogin).subscribe(data => {
      let response = data.json();
      // this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      if(response.status == "200") {
        console.log(response.data);
        this.dataStorage.login(response.data, "user");
        this.loading();
        this.app.getRootNav().setRoot(HomeMhsPage);
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
      content: 'Harap Tunggu...'
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
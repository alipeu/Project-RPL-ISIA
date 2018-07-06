import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HomeMhsPage } from '../home-mhs/home-mhs';
import { Http } from '@angular/http';
import { Data } from '../../provider/data';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  id: any;
  posts: Array<{}>;
  response: any;
  nama: any;
  waktu: any;
  judul: any;
  deskripsi: any;
  komentar: Array<{}>;

  constructor(
    public app: App,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http,
    public toastCtrl: ToastController, 
    public alertCtrl: AlertController, 
    public dataStorage: Data
  ) {
    this.id = navParams.get('data');
    let linkgetposts = 'http://localhost/rest_api/post.php';
  	this.posts = [];
  	this.response = {};
    this.dataStorage.getData().then((value) => {
      this.http.get(linkgetposts).subscribe(data => {
        this.response = data.json();
        console.log(this.response.data);
        console.log(this.id);
        if(this.response.status == "200"){
          for(var i = 0; i < this.response.data.length; i++) {
            var thedatetime = new Date(+this.response.data[i].waktu);
            var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
            if(this.response.data[i].id_post == this.id) {
              this.nama = this.response.data[i].nama_prv;
              this.waktu = thedatetime.toLocaleDateString('id-ID', options);
              this.judul = this.response.data[i].judul;
              this.deskripsi = this.response.data[i].deskripsi;
            }
          }
        }
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}

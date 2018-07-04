import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { PostPage } from '../post/post';
import { EditPostPage } from '../edit-post/edit-post';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { Data } from '../../provider/data';

@IonicPage()
@Component({
  selector: 'page-home-sch',
  templateUrl: 'home-sch.html',
})
export class HomeSchPage {

  userid: any;
  posts: Array<{}>;
  response: any;

  constructor(
    public app: App,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http,
    public toastCtrl: ToastController, 
    public alertCtrl: AlertController, 
    public dataStorage: Data
  ) {
    
    let linkgetposts = 'http://localhost/rest_api/postp.php';
  	this.posts = [];
  	this.response = {};
    this.dataStorage.getData().then((value) => {
      this.http.post(linkgetposts, JSON.stringify({userid_prv: value.userid_prv})).subscribe(data => {
        this.response = data.json();
        if(this.response.status == "200"){
            console.log(this.response.data);
            for (var i=0;i<this.response.data.length;i++) {
                var thedatetime = new Date(+this.response.data[i].waktu);
                var options = { weekday: 'long', year: 'numeric',
                month: 'short', day: 'numeric' }

                let posts_elem =
                {id_post: this.response.data[i].id_post, userid_prv: this.response.data[i].userid_prv, 
                nama_prv: this.response.data[i].nama_prv, judul: this.response.data[i].judul, 
                deskripsi: this.response.data[i].deskripsi, waktu: thedatetime.toLocaleDateString('id-ID', options)};
                this.posts.push(posts_elem);
            }
          } else {
            let conf = this.alertCtrl.create({
              title: 'Tidak ada post',
              message: 'Belum ada post saat ini. Silakan coba lagi nanti',
              buttons: [
        {
            text: 'OK',
            handler: () => {
            console.log('OK clicked');
            }
        }]
            });
            conf.present();
          }
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeSchPage');
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

  logout() {
    this.dataStorage.logout();
    this.app.getRootNav().setRoot(HomePage);
  }
}

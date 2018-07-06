import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HomeSchPage } from '../home-sch/home-sch';
import { Http } from '@angular/http';
import { Data } from '../../provider/data';

@IonicPage()
@Component({
  selector: 'page-edit-post',
  templateUrl: 'edit-post.html',
})
export class EditPostPage {

  posts: Array<{}>;
  response: any;
  id: any;
  judul: any;
  deskripsi: any;

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
    let linkgetposts = 'http://localhost/rest_api/poste.php';
  	this.posts = [];
  	this.response = {};
    this.dataStorage.getData().then((value) => {
      this.http.post(linkgetposts, JSON.stringify({userid_prv: value.userid_prv})).subscribe(data => {
        this.response = data.json();
        console.log(this.response.data);
        if(this.response.status == "200") {
          for(var i = 0; i < this.response.data.length; i++) {
            if(this.response.data[i].id_post == this.id) {
              this.judul = this.response.data[i].judul;
              this.deskripsi = this.response.data[i].deskripsi;
            }
          }
        }
      });
    });
  }

  edit() {
    let link = 'http://localhost/rest_api/editpost.php';

    let konfirmasi = this.alertCtrl.create({
    title: 'Konfirmasi edit',
		message: 'Apakah Anda yakin ingin mengedit post ini?',
		buttons: [
      {
        text: 'Ya',
        handler: () => {
          var thetime = new Date(Date.now());
          var utctime = thetime.getTime();
          let postData = JSON.stringify({id_post: this.id, judul: this.judul, deskripsi: this.deskripsi, waktu: utctime});
          console.log(postData)
            if(this.judul.length <= 30){
              this.http.post(link, postData).subscribe(data => {
              console.log(data)
              let response = data.json();
              //let response = data["_body"];
              console.log(response)
              if(response.status == "200"){
                let toast = this.toastCtrl.create({
                  message: 'Post berhasil diedit!',
                  duration: 3000,
                  position: 'top'
                });
                toast.present()
                this.app.getRootNav().setRoot(HomeSchPage, {opentab: 2});
              } else {
                let toast = this.toastCtrl.create({
                  message: 'Gagal membuat post. Silakan coba lagi.',
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
              }
  
            }, error => {
            console.log(error);
          });
        } else {
          let toast = this.toastCtrl.create({
                message: 'Field judul tidak boleh lebih dari 30 karakter',
                duration: 3000,
                position: 'top'
              });
              toast.present();
        }
          console.log('Ya clicked');
        }
      },
      {
		  text: 'Tidak',
		  handler: () => {
		    console.log('Tidak clicked');
		  }
		}
		]
    });
   konfirmasi.present(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPostPage');
  }

}

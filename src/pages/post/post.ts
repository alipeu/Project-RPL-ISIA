import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, App } from 'ionic-angular';
import { HomeSchPage } from '../home-sch/home-sch';
import { Http } from '@angular/http';
import { Data } from '../../provider/data';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  data: any = {judul: "", deskripsi: "", userid_prv: ""};

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
    this.dataStorage.getData().then((value) => {
  		this.data.userid_prv = value.userid_prv;
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  validation() {
  	if(this.data.judul === '' || this.data.deskripsi === ''){
      let toast = this.toastCtrl.create({
        message: 'Harap isi judul dan deskripsi',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {
    	this.create();
    }
  }

  create() {
    let link = 'http://localhost/rest_api/addpost.php';

    let konfirmasi = this.alertCtrl.create({
    	title: 'Konfirmasi post',
		message: 'Apakah Anda yakin ingin membuat post ini?',
		buttons: [
		{
		  text: 'Tidak',
		  handler: () => {
		    console.log('Tidak clicked');
		  }
		},
		{
		  text: 'Ya',
		  handler: () => {
		  	var thetime = new Date(Date.now());
        var utctime = thetime.getTime();
        let postData = JSON.stringify({judul: this.data.judul, deskripsi: this.data.deskripsi, waktu: utctime, userid_prv: this.data.userid_prv});
        console.log(postData)
          if(this.data.judul.length <= 24){
            this.http.post(link, postData).subscribe(data => {
            console.log(data)
            let response = data.json();
            //let response = data["_body"];
            console.log(response)
            if(response.status == "200"){
              let toast = this.toastCtrl.create({
                message: 'Post berhasil dibuat!',
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
      } else { //kalau judul lebih dari 24 karakter
        let toast = this.toastCtrl.create({
              message: 'Field judul tidak boleh lebih dari 24 karakter',
              duration: 3000,
              position: 'top'
            });
            toast.present();
      }
		    console.log('Ya clicked');
      }
		  }
		]
    });
   konfirmasi.present(); 
  }
}

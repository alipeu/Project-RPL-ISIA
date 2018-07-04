import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DetailPage } from '../detail/detail';
import { ListPage } from '../list/list';
import { Http } from '@angular/http';
import { Data } from '../../provider/data';
import { Menu } from 'ionic-angular/components/app/menu-interface';

@IonicPage()
@Component({
  selector: 'page-home-mhs',
  templateUrl: 'home-mhs.html',
})
export class HomeMhsPage {
  
  posts: Array<{}>;
  response: any;

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http,
    public toastCtrl: ToastController, 
    public alertCtrl: AlertController, 
    public dataStorage: Data
  ) {
    let linkgetposts = 'http://localhost/rest_api/post.php';
  	this.posts = [];
  	this.response = {};

  	this.http.get(linkgetposts).subscribe(data => {
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

  onLoadList(){
    this.navCtrl.push(ListPage);
  }
}
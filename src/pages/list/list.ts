import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ToastController, AlertController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Http } from '@angular/http';
import { Data } from '../../provider/data';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
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
          for (var i = 0; i < this.response.data.length; i++) {
          	  let posts_elem =
              {nama: this.response.data[i].nama_prv, id: this.response.data[i].id_post};
              this.posts.push(posts_elem);
          }
        }
  	});
  }

  pushDetail(id) {
    this.navCtrl.push(DetailPage, 
      {
        data: id,
      }
    );

  }
}

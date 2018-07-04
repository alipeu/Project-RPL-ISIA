import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../provider/data';

import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { HomeMhsPage } from '../pages/home-mhs/home-mhs';
import { HomeSchPage } from '../pages/home-sch/home-sch';
import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  showSplash = true;
  rootPage: any;
  role: any;
  data: any;
  pages: Array<{title: string, component: any}>;

  constructor(
    public app: App,
    public platform: Platform, 
    public statusBar: StatusBar,
    public menu: MenuController, 
    public splashScreen: SplashScreen,
    public dataStorage: Data
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomeMhsPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'About Us', component: HelpPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false)
    });

    this.dataStorage.getRole().then((value) => {
      this.role = value;
    });

    this.dataStorage.isLogin().then((value) => {
      if(value && this.role == "mhs") {
        this.rootPage = HomeMhsPage;
        this.dataStorage.getData().then((value) => {
          console.log(value);
          this.data = {
            nama: value.nama_mhs, 
            nim: value.nim, 
            email: value.userid + '@apps.ipb.ac.id'
          };
          // this.nama_mhs = data.nama_mhs;
          // this.nim = data.nim;
          // this.email = data.userid + '@apps.ipb.ac.id';
        })
      }
      else if(value && this.role == "prv") {
        this.rootPage = HomeSchPage;
      }
      else {
        this.rootPage = HomePage;
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.menu.close();
    this.dataStorage.logout();
    this.app.getRootNav().setRoot(MyApp);
  }
}
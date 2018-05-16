import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../provider/data';

import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { HomeMhsPage } from '../pages/home-mhs/home-mhs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  nama_mhs: any;

  pages: Array<{title: string, component: any}>;

  constructor(
    public app: App,
    public platform: Platform, 
    public statusBar: StatusBar,
    public menu: MenuController, 
    public splashScreen: SplashScreen,
    public data: Data
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomeMhsPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Help', component: HelpPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.data.isLogin().then((value) => {
      if(value) {
        this.rootPage = HomeMhsPage;
      }
      else {
        this.rootPage = HomePage;
      }
    });
  }

  ionViewWillEnter() {
    this.data.getDataUser().then((data) => {
      this.nama_mhs = data.nama_mhs;
    })
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.menu.close();
    this.data.logout();
    this.app.getRootNav().setRoot(MyApp);
  }
}

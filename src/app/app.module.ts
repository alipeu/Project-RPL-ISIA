import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { LoginMhsPage } from '../pages/login-mhs/login-mhs';
import { LoginSchPage } from '../pages/login-sch/login-sch';
import { DetailPage } from '../pages/detail/detail';
import { HomeMhsPage } from '../pages/home-mhs/home-mhs';
import { HomeSchPage } from '../pages/home-sch/home-sch';
import { HelpPage } from '../pages/help/help';
import { PostPage } from '../pages/post/post';
import { EditPostPage } from '../pages/edit-post/edit-post';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../provider/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    LoginMhsPage,
    LoginSchPage,
    DetailPage,
    HomeMhsPage,
    HomeSchPage,
    HelpPage,
    PostPage,
    EditPostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    LoginMhsPage,
    LoginSchPage,
    DetailPage,
    HomeMhsPage,
    HomeSchPage,
    HelpPage,
    PostPage,
    EditPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

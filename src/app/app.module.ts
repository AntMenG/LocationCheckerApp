import { NgModule, ErrorHandler } from '@angular/core';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SQLite } from '@ionic-native/sqlite';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SettingsPage } from '../pages/settings/settings';
import { LocationPage } from '../pages/location/location';
import { HorarioPage } from '../pages/horario/horario';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PiPage } from "../pages/pi/pi";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    LocationPage,
    HorarioPage,
    SettingsPage,
    TabsPage, 
    LoginPage,
    PiPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LocationPage,
    HorarioPage,
    SettingsPage,
    TabsPage,
    LoginPage,
    PiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    SQLite, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}

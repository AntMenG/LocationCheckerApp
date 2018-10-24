import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { RestProvider } from '../providers/rest/rest';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  session = false;
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private sqlite: SQLite,
    restProvider: RestProvider
  ) {
    platform.ready().then(() => {
      
      if (platform.is('android')) {
        statusBar.overlaysWebView(true);
        statusBar.backgroundColorByHexString('#00000000');
      }
      splashScreen.hide();
      let self = this;
      //self.rootPage = TabsPage;
      
      this.sqlite.create({
        name: 'data.db',
        location: 'default' 
      })
      .then((db: SQLiteObject) => {
        console.log(db);
        db
        .executeSql('create table this_user(user VARCHAR(32), pass VARCHAR(32))')
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(JSON.stringify(e)));

        let sql = 'SELECT * FROM this_user';
        db.executeSql(sql,[])
        .then(response => {
          let tasks = [];
          if (response.rows.length > 0) {
            tasks.push( response.rows.item(0) );
            //alert(tasks[0].user + " " + tasks[0].pass);
            restProvider.getUser()
            .then(data => {
              restProvider.user = data['results'];
              console.log(restProvider.user);
              self.rootPage = TabsPage;
            }).catch(e => {
              alert("Error de red");
            });
          } else {
            self.rootPage = LoginPage;
          }
        })
        .catch(error => Promise.reject(error));
      })
      .catch(error =>{
        console.error(error);
      });
    });
  }

}

/*
ionic integrations enable cordova --add

ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyBlzJR3j96vYxeYpuVYJqd37-qYhbBSGoY" --variable API_KEY_FOR_IOS="AIzaSyBlzJR3j96vYxeYpuVYJqd37-qYhbBSGoY" --save
npm install @ionic-native/google-maps --save
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';

import { TabsPage } from "../tabs/tabs";

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private sqlite: SQLite,
    public restProvider: RestProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
    .then((db) => {
      console.log(db);

      let sql = 'insert into this_user values(?,?)';
      db.executeSql(sql, ["12090369","105012"])
      .then(response => {
        this.restProvider.getUser()
        .then(data => {
          this.restProvider.user = data['results'];
          console.log(this.restProvider.user);
          this.navCtrl.push(TabsPage);
        });
      })
      .catch(error => Promise.reject(error));
    })
    .catch(error =>{
      console.error(error);
    });
    return false;
  }

}

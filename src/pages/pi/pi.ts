import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the PiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pi',
  templateUrl: 'pi.html',
})
export class PiPage {

  users:any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public restProvider: RestProvider
  ) {
    this.users = restProvider.user;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PiPage');
  }

}

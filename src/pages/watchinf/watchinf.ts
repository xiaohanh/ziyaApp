import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-watchinf',
  templateUrl: 'watchinf.html',
})
export class WatchinfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchinfPage');
  }
  
 
}

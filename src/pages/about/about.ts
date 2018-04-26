import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
@IonicPage()
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  watchinf(){
    this.navCtrl.push('WatchinfPage');
  }
}

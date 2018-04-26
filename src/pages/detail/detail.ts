import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

 
    constructor(private alertCtrl: AlertController,public params: NavParams,public navCtrl: NavController, public navParams: NavParams) {

    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: '分享这张照片',
     
      buttons: [
        {
          text: '举报',
        
          handler: () => {
            this.navCtrl.push('ReportPage');
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log(' clicked');
          }
        }
      ]
    });
    alert.present();
  }
  

  report(){
    this.presentConfirm();
  }
}

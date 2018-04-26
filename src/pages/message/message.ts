import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})

export class MessagePage{
  items=[];
  constructor(public navCtrl:NavController) {
    this.items = [
      {
        'img': 'assets/imgs/1.png',
        'title': '李明',
        'line': '[4G在线]在线4小时',
        'time':'18:49'
      },
      { 
        'img': 'assets/imgs/2.png',
        'title': '刘红',
        'line': '[4G在线]在线5小时',
        'time':'22:30'
      },
      {
        'img': 'assets/imgs/3.png',
        'title': '小鹿',
        'line': '[4G在线]在线2小时',
        'time':'9:25'
      },
      {
        'img': 'assets/imgs/4.png',
        'title': '彤彤',
        'line': '[4G在线]在线4小时',
        'time':'03:31'
      }
 
    ]
  }

  dialogue(item) {
    this.navCtrl.push('DialoguePage', { name1: item });
  }
}

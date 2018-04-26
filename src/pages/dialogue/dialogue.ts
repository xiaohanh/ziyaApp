import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dialogue',
  templateUrl: 'dialogue.html',
})
export class DialoguePage {
  name;
  img;
  time;
  line;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
 
    let name1 = navParams.get('name1');
   this.name=name1.title;
   this.img=name1.img;
   this.time=name1.time;
   this.line=name1.line;

  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DialoguePage');
  }

}

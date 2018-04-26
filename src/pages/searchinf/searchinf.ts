import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';
import { Navbar } from "ionic-angular";  

@IonicPage()
@Component({
  selector: 'page-searchinf',
  templateUrl: 'searchinf.html',
})
export class SearchinfPage {
  @ViewChild(Navbar) navbar: Navbar;
  constructor(public bk:ViewController,public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i <3; i++) {
      this.items.push( this.items.length );
    }
  }
  ionViewDidLoad() {
    this.navbar.backButtonClick=()=>{
      this.navCtrl.pop();
    }
     this.bk.setBackButtonText('');
    // 是否显示返回按钮this.bk.showBackButton(false);
    this.bk.showBackButton(true);

  }

  items = [];
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i <3; i++) {
        this.items.push( this.items.length );
      }

      
      infiniteScroll.complete();
      if(this.items.length>=9){
        infiniteScroll.enable(false);
      }
    }, 500);
  }

  detail(){
    this.navCtrl.push('DetailPage');
   }


}

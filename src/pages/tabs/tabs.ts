import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';
import { MinePage } from '../mine/mine';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;

  tab4Root =MessagePage;
  tab5Root=MinePage;
  constructor() {

  }
}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagePage } from '../pages/message/message';
import { MinePage } from '../pages/mine/mine';
// import { LogPage } from '../pages/log/log';
// import { RegisterPage } from '../pages/register/register';
// import { PasswordPage } from '../pages/password/password';
// import { AgreePage } from '../pages/agree/agree';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { SplashScreen } from '@ionic-native/splash-screen';
import{ComponentsModule} from '../components/components.module';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MessagePage,
    MinePage
    // LogPage,
    // RegisterPage,
    // PasswordPage,
    // AgreePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule,
    //二级页面隐藏底部的tabs
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      backButtonText:'',
      pageTransition:'ios-transition',
     backButtonIcon:""
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MessagePage,
    MinePage
    // LogPage,
    // RegisterPage,
    // PasswordPage,
    // AgreePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}




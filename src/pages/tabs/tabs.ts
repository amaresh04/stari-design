import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { MyProfilePage } from '../my-profile/my-profile';
import { PurchaseVotePage } from '../purchase-vote/purchase-vote';
import { TalentVideoPage } from '../talent-video/talent-video';
import { NotificationsPage } from '../notifications/notifications';
import { WorldTalentPage } from '../world-talent/world-talent';
import { LivePage } from '../live/live';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
   tab1Root = HomePage;
   tab2Root = WorldTalentPage;
   tab3Root = LivePage;
   tab4Root = NotificationsPage;
   tab5Root = MyProfilePage;
   
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  
  gotoLive(): void {
    this.navCtrl.push(LivePage);
  }
  
}

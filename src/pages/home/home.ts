import { Component, HostBinding } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PurchaseVotePage } from '../purchase-vote/purchase-vote';
import { TalentVideoPage } from '../talent-video/talent-video';
import { SearchPage } from '../search/search'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @HostBinding('class') dir = 'direction_rtl';
  @HostBinding('class') dir = 'direction_ltr';
  constructor(public navCtrl: NavController) {

  }

  gotopurchaseVote(): void {
    this.navCtrl.push(PurchaseVotePage);
  }
  gotoTalentVideo(): void {
    this.navCtrl.push(TalentVideoPage);
  }
  gotoSearch(): void {
    this.navCtrl.push(SearchPage);
  }






}

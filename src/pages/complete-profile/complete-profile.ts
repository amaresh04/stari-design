import { Component,HostBinding } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VotePage } from '../vote/vote';


/**
 * Generated class for the CompleteProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete-profile',
  templateUrl: 'complete-profile.html',
})
export class CompleteProfilePage {
//@HostBinding('class') dir = 'direction_rtl';
@HostBinding('class') dir = 'direction_ltr';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompleteProfilePage');
  }
  gotoVote(): void {
    this.navCtrl.push(VotePage);
  }

}

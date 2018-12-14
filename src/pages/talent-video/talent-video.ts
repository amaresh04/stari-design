import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompleteProfilePage } from '../complete-profile/complete-profile';

/**
 * Generated class for the TalentVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-talent-video',
  templateUrl: 'talent-video.html',
})
export class TalentVideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TalentVideoPage');
  }
  completeProfile(): void {
    this.navCtrl.push(CompleteProfilePage);
 }

}

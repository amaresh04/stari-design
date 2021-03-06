import { Component,HostBinding } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BecomeTalentProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-become-talent-process',
  templateUrl: 'become-talent-process.html',
})
export class BecomeTalentProcessPage {
  //@HostBinding('class') dir = 'direction_rtl';
  @HostBinding('class') dir = 'direction_ltr';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BecomeTalentProcessPage');
  }

}

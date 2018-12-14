import { Component,HostBinding } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
// import { FilterPage } from '../filter/filter';
import { SearchModalPage } from '../search-modal/search-modal';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
      //@HostBinding('class') dir = 'direction_rtl';
      @HostBinding('class') dir = 'direction_ltr';
  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  // gotoFilter(): void {
  //   this.navCtrl.push(FilterPage);
  // }

  SearchModal() {
    let searchModal = this.modalCtrl.create(SearchModalPage, { userId: 8675309 });
    searchModal.onDidDismiss(data => {
    console.log(data)
    });
    searchModal.present();
    }

}


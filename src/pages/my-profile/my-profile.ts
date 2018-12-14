import { Component,HostBinding } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseVotePage } from '../purchase-vote/purchase-vote';
import { AccountSettingPage } from '../account-setting/account-setting';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
//@HostBinding('class') dir = 'direction_rtl';
@HostBinding('class') dir = 'direction_ltr';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }
  gotopurchaseVote(): void {
    this.navCtrl.push(PurchaseVotePage);
 }
 gotoAccountSetting(): void {
  this.navCtrl.push(AccountSettingPage);
}


 hideProfessional:boolean = true;
 hideVoteStats:boolean = true;
 hideMyVideos:boolean = true;
 hidePosition:boolean = true;
 hideReviews:boolean = true;
 iconsProfessional: boolean = true;
 iconsVoteStats: boolean = true;
 iconsMyVideos: boolean = true;
 iconsPosition: boolean = true;
 iconsReviews: boolean = true;
 toggleProfessional():void{
  this.hideProfessional = !this.hideProfessional;
  this.iconsProfessional = !this.iconsProfessional;
 }
 toggleVoteStats():void{
  this.hideVoteStats = !this.hideVoteStats;
  this.iconsVoteStats = !this.iconsVoteStats;
 }
 toggleMyVideos():void{
  this.hideMyVideos = !this.hideMyVideos;
  this.iconsMyVideos = !this.iconsMyVideos;
 }
 togglePosition():void{
  this.hidePosition = !this.hidePosition;
  this.iconsPosition = !this.iconsPosition;
 }
 toggleReviews():void{
  this.hideReviews = !this.hideReviews;
  this.iconsReviews = !this.iconsReviews;
 }



 
}

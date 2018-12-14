import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseVotePage } from './purchase-vote';

@NgModule({
  declarations: [
    PurchaseVotePage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseVotePage),
  ],
})
export class PurchaseVotePageModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
// import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
// import { Signup2Page } from '../pages/signup2/signup2';
 import { TalentPage } from '../pages/talent/talent';
// import { BecomeTalentPage } from '../pages/become-talent/become-talent';
// import { SideMenuPage } from '../pages/side-menu/side-menu';
// import { CompleteTalentProcessPage } from '../pages/complete-talent-process/complete-talent-process';
import { BecomeTalentCompletePage } from '../pages/become-talent-complete/become-talent-complete';
// import { BecomeTalentProcessPage } from '../pages/become-talent-process/become-talent-process';
// import { BecomeTalentdefaultPage } from '../pages/become-talentdefault/become-talentdefault';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { CompleteProfilePage } from '../pages/complete-profile/complete-profile';
import { PurchaseVotePage } from '../pages/purchase-vote/purchase-vote';
import { TalentVideoPage } from '../pages/talent-video/talent-video';
import { NotificationsPage } from '../pages/notifications/notifications';
import { WorldTalentPage } from '../pages/world-talent/world-talent';
import { LivePage } from '../pages/live/live';
import { VotePage } from '../pages/vote/vote';
import { FilterPage } from '../pages/filter/filter'; 
import { SearchPage } from '../pages/search/search'; 
import { SearchModalPage } from '../pages/search-modal/search-modal';
import { AccountSettingPage } from '../pages/account-setting/account-setting';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
   // ForgotPasswordPage,
   // Signup2Page,
    TalentPage,
   // BecomeTalentPage,
   // SideMenuPage,
   // CompleteTalentProcessPage,
    BecomeTalentCompletePage,
    //BecomeTalentProcessPage,
    //BecomeTalentdefaultPage,
    MyProfilePage,
    CompleteProfilePage,
    PurchaseVotePage,
    LivePage,
    TalentVideoPage,
    NotificationsPage,
    WorldTalentPage,
    VotePage,
    FilterPage,
    SearchPage,
    SearchModalPage,
    AccountSettingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    // ForgotPasswordPage,
    // Signup2Page,
     TalentPage,
    // BecomeTalentPage,
    // SideMenuPage,
    // CompleteTalentProcessPage,
    BecomeTalentCompletePage,
    // BecomeTalentProcessPage,
    // BecomeTalentdefaultPage,
    MyProfilePage,
    CompleteProfilePage,
    PurchaseVotePage,
    LivePage,
    TalentVideoPage,
    NotificationsPage,
    WorldTalentPage,
    VotePage,
    FilterPage,
    SearchPage,
    SearchModalPage,
    AccountSettingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { Component, HostBinding } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
//import { HomePage } from '../pages/home/home';
//import { LoginPage } from '../pages/login/login';
//import { SignupPage } from '../pages/signup/signup';
// import { Signup2Page } from '../pages/signup2/signup2';
// import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
// import { TalentPage } from '../pages/talent/talent';
// import { BecomeTalentPage } from '../pages/become-talent/become-talent';
// import { SideMenuPage } from '../pages/side-menu/side-menu'; 
// import { CompleteTalentProcessPage } from '../pages/complete-talent-process/complete-talent-process';
// import { BecomeTalentCompletePage } from '../pages/become-talent-complete/become-talent-complete';
// import { BecomeTalentProcessPage } from '../pages/become-talent-process/become-talent-process';
// import { BecomeTalentdefaultPage } from '../pages/become-talentdefault/become-talentdefault';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  //rootPage: any = HomePage; 
  //rootPage: any = LoginPage;
  //rootPage:any = SignupPage;
   //rootPage:any = Signup2Page;
  //rootPage:any = ForgotPasswordPage;
  //rootPage: any = BecomeTalentPage;
  //rootPage:any = TalentPage;
  // rootPage: any = SideMenuPage;
  //rootPage: any = CompleteTalentProcessPage;
   //rootPage: any = BecomeTalentCompletePage;
   //rootPage: any = BecomeTalentProcessPage;
   //rootPage: any = BecomeTalentdefaultPage;
  
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  //@HostBinding('class') dir = 'direction_rtl';
  @HostBinding('class') dir = 'direction_ltr';
}


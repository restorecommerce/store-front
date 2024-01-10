import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './user-profile/pages/profile/profile.component';
import { PrivacyPolicyComponent } from './privacy-policy/pages/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/pages/imprint/imprint.component';

const routes: Routes = [
  // {
  //   path: 'returns',
  //   component: ReturnsComponent,
  // },
  // {
  //   path: 'click-and-collect',
  //   component: ClickAndCollectComponent,
  // },
  // {
  //   path: 'delivery',
  //   component: DeliveryComponent,
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  // },
  // {
  //   path: 'about-us',
  //   component: ImprintComponent,
  // },
  // {
  //   path: 'privacy-statement',
  //   component: PrivacyPolicyComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

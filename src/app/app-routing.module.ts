import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickAndCollectComponent } from './pages/click-and-collect/click-and-collect.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

const routes: Routes = [
  {
    path: 'returns',
    component: ReturnsComponent,
  },
  {
    path: 'click-and-collect',
    component: ClickAndCollectComponent,
  },
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'about-us',
    component: ImprintComponent,
  },
  {
    path: 'privacy-statement',
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

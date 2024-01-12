import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'returns',
    loadChildren: () =>
      import('./features/returns/returns.module').then((m) => m.ReturnsModule),
  },
  {
    path: 'click-and-collect',
    loadChildren: () =>
      import('./features/click-and-collect/click-and-collect.module').then(
        (m) => m.ClickAndCollectModule
      ),
  },
  {
    path: 'delivery',
    loadChildren: () =>
      import('./features/delivery/delivery.module').then(
        (m) => m.DeliveryModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./features/imprint/imprint.module').then((m) => m.ImprintModule),
  },
  {
    path: 'privacy-statement',
    loadChildren: () =>
      import('./features/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

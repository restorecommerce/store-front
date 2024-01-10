import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutDeliveryComponent } from './pages/checkout-delivery/checkout-delivery.component';
import { CheckoutPaymentComponent } from './pages/checkout-payment/checkout-payment.component';
import { CheckoutFormsComponent } from './pages/checkout-forms/checkout-forms.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutPageGuard } from './services/checkout-page-guard.service';
import { OrderOverviewComponent } from './components/order-overview/order-overview.component';
import { SharedModule } from '../shared/shared.module';
import {
  VCLFlipSwitchModule,
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLRadioButtonModule,
  VCLTabNavModule,
} from '@vcl/ng-vcl';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [CheckoutPageGuard],
    children: [
      {
        path: '',
        component: CheckoutFormsComponent,
      },
      {
        path: 'payment',
        component: CheckoutPaymentComponent,
      },
      {
        path: 'delivery',
        component: CheckoutDeliveryComponent,
      },
    ],
  },
];

const vclModules = [
  VCLInputModule,
  VCLTabNavModule,
  VCLRadioButtonModule,
  VCLFormControlGroupModule,
  VCLFlipSwitchModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutFormsComponent,
    CheckoutPaymentComponent,
    CheckoutDeliveryComponent,
    OrderOverviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ...vclModules,
  ],
})
export class CheckoutModule {}

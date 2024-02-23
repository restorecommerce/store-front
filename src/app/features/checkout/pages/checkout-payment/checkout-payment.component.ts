import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from '@vcl/ng-vcl';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss'],
})
export class CheckoutPaymentComponent {
  payMethod = this.checkoutService.paymentData || 'paypal';

  constructor(
    private notifier: NotifierService,
    private router: Router,
    private translate: TranslateService,
    public checkoutService: CheckoutService
  ) {}

  cardInfoForm = new UntypedFormGroup({
    cardNumber: new UntypedFormControl('', [Validators.required]),
    expiryDate: new UntypedFormControl('', [Validators.required]),
    securityCode: new UntypedFormControl('', [Validators.required]),
    cardHolder: new UntypedFormControl('', [Validators.required]),
  });

  cardInfoFormSubmit() {
    if (this.cardInfoForm.valid) {
      console.log(this.cardInfoForm.value);
      this.router.navigate(['/checkout/delivery']);
    } else {
      this.notifier.error(
        this.translate.instant('Checkout.invalidFormNotificationMessage')
      );
    }
  }

  goToDelivery() {
    this.checkoutService.paymentData = this.payMethod;
    this.router.navigate(['/checkout/delivery']);
  }
}

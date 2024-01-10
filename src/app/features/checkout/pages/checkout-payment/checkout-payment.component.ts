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
  payMethod = 'paypal';

  constructor(
    private notifier: NotifierService,
    private router: Router,
    private translate: TranslateService,
    public checkoutService: CheckoutService
  ) {}

  paymentOptionForm = new UntypedFormGroup({
    cardNumber: new UntypedFormControl('', [Validators.required]),
    expiryDate: new UntypedFormControl('', [Validators.required]),
    securityCode: new UntypedFormControl('', [Validators.required]),
    cardHolder: new UntypedFormControl('', [Validators.required]),
  });

  paymentOptionSubmit() {
    if (this.paymentOptionForm.valid) {
      console.log(this.paymentOptionForm.value);
      this.router.navigate(['/checkout/delivery']);
    } else {
      this.notifier.error(
        this.translate.instant('Checkout.invalidFormNotificationMessage')
      );
    }
  }

  goToDelivery() {
    console.log(this.payMethod);
    this.router.navigate(['/checkout/delivery']);
  }
}

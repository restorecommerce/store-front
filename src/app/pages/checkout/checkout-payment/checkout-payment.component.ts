import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from '@vcl/ng-vcl';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss'],
})
export class CheckoutPaymentComponent implements OnInit {
  payMethod = 'paypal';

  constructor(
    private notifier: NotifierService,
    private router: Router,
    private route: ActivatedRoute,
    public checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {}

  paymentOptionForm = new FormGroup({
    cardNumber: new FormControl('', [Validators.required]),
    expiryDate: new FormControl('', [Validators.required]),
    securityCode: new FormControl('', [Validators.required]),
    cardHolder: new FormControl('', [Validators.required]),
  });

  paymentOptionSubmit() {
    if (this.paymentOptionForm.valid) {
      console.log(this.paymentOptionForm.value);
      this.router.navigate(['/checkout/delivery']);
    } else {
      this.notifier.error('Bitte füllen Sie das Formular ganz aus.');
    }
  }

  goToDelivery() {
    console.log(this.payMethod);
    this.router.navigate(['/checkout/delivery']);
  }
}

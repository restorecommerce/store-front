import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Money } from '@restorecommerce/cart/lib/model/primitives';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss'],
})
export class CheckoutDeliveryComponent implements OnInit {
  constructor(
    private cartService: CartService,
    public checkoutService: CheckoutService
  ) {}

  deliveryMethod = 'standard';

  ngOnInit(): void {}

  voucherForm = new UntypedFormGroup({
    cardNumber: new UntypedFormControl('', [Validators.required]),
    expiryDate: new UntypedFormControl('', [Validators.required]),
    securityCode: new UntypedFormControl('', [Validators.required]),
    cardHolder: new UntypedFormControl('', [Validators.required]),
  });

  voucherSubmit() {
    if (this.voucherForm.valid) {
      console.log(this.voucherForm.value);
    }
  }

  getCartTotalGross(): string {
    return this.cartService.round(this.cartService.getCartTotalGross());
  }

  getCartShipping(): Money {
    return this.cartService.getCartShipping();
  }

  getTaxes(): string {
    return this.cartService.round(
      Number(this.getCartTotalGross()) - Number(this.getCartTotalNet())
    );
  }

  getCartTotalNet(): string {
    return this.cartService.round(this.cartService.getCartTotalNet());
  }
}

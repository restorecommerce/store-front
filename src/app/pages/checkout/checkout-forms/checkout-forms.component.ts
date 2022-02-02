import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from '@vcl/ng-vcl';

import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-forms',
  templateUrl: './checkout-forms.component.html',
  styleUrls: ['./checkout-forms.component.scss'],
})
export class CheckoutFormsComponent implements OnInit {
  private translateService: TranslateService;

  constructor(
    private notifier: NotifierService,
    private cartService: CartService,
    private translate: TranslateService,
    private router: Router,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {}

  homeDeliveryForm = new FormGroup({
    gender: new FormControl(null, Validators.required),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    streetName: new FormControl('', [Validators.required]),
    houseNumber: new FormControl('', [Validators.required]),
    postcode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
  });

  homeDeliverySubmit() {
    if (this.homeDeliveryForm.valid) {
      this.checkoutService.deliveryData = {
        deliveryOption: 'Checkout.HomeDelivery',
        deliveryAddress: this.homeDeliveryForm.value,
      };
      this.router.navigate(['/checkout/payment']);
    } else {
      this.notifier.error(
        this.translate.instant('Checkout.invalidFormNotificationMessage')
      );
    }
  }

  parcelShopForm = new FormGroup({
    gender: new FormControl(null, Validators.required),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    streetName: new FormControl('', [Validators.required]),
    houseNumber: new FormControl('', [Validators.required]),
    postcode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    psGender: new FormControl(null, Validators.required),
    psFirstName: new FormControl('', [Validators.required]),
    psLastName: new FormControl('', [Validators.required]),
    psPostNumber: new FormControl('', [Validators.required]),
  });

  parcelShopSubmit() {
    if (this.parcelShopForm.valid) {
      this.router.navigate(['/checkout/payment']);
    } else {
      this.notifier.error('Bitte füllen Sie das Formular ganz aus.');
    }
  }

  clickAndCollectForm = new FormGroup({
    gender: new FormControl(null, Validators.required),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    streetName: new FormControl('', [Validators.required]),
    houseNumber: new FormControl('', [Validators.required]),
    postcode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
  });

  clickAndCollectSubmit() {
    if (this.clickAndCollectForm.valid) {
      // console.log(this.homeDeliveryForm.value);
      // console.log('And this are your products!');
      // console.log(this.cartService.getCartItems());
      this.router.navigate(['/checkout/payment']);
    } else {
      this.notifier.error('Bitte füllen Sie das Formular ganz aus.');
    }
  }
}

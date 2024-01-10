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
  selector: 'app-checkout-forms',
  templateUrl: './checkout-forms.component.html',
  styleUrls: ['./checkout-forms.component.scss'],
})
export class CheckoutFormsComponent {
  constructor(
    private notifier: NotifierService,
    private translate: TranslateService,
    private router: Router,
    private checkoutService: CheckoutService
  ) {}

  homeDeliveryForm = new UntypedFormGroup({
    gender: new UntypedFormControl(null, Validators.required),
    firstName: new UntypedFormControl('', [Validators.required]),
    lastName: new UntypedFormControl('', [Validators.required]),
    streetName: new UntypedFormControl('', [Validators.required]),
    houseNumber: new UntypedFormControl('', [Validators.required]),
    postcode: new UntypedFormControl('', [Validators.required]),
    city: new UntypedFormControl('', [Validators.required]),
    country: new UntypedFormControl('', [Validators.required]),
    mail: new UntypedFormControl('', [Validators.required]),
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

  parcelShopForm = new UntypedFormGroup({
    gender: new UntypedFormControl(null, Validators.required),
    firstName: new UntypedFormControl('', [Validators.required]),
    lastName: new UntypedFormControl('', [Validators.required]),
    streetName: new UntypedFormControl('', [Validators.required]),
    houseNumber: new UntypedFormControl('', [Validators.required]),
    postcode: new UntypedFormControl('', [Validators.required]),
    city: new UntypedFormControl('', [Validators.required]),
    country: new UntypedFormControl('', [Validators.required]),
    mail: new UntypedFormControl('', [Validators.required]),
    psGender: new UntypedFormControl(null, Validators.required),
    psFirstName: new UntypedFormControl('', [Validators.required]),
    psLastName: new UntypedFormControl('', [Validators.required]),
    psPostNumber: new UntypedFormControl('', [Validators.required]),
  });

  parcelShopSubmit() {
    if (this.parcelShopForm.valid) {
      this.router.navigate(['/checkout/payment']);
    } else {
      this.notifier.error('Bitte füllen Sie das Formular ganz aus.');
    }
  }

  clickAndCollectForm = new UntypedFormGroup({
    gender: new UntypedFormControl(null, Validators.required),
    firstName: new UntypedFormControl('', [Validators.required]),
    lastName: new UntypedFormControl('', [Validators.required]),
    streetName: new UntypedFormControl('', [Validators.required]),
    houseNumber: new UntypedFormControl('', [Validators.required]),
    postcode: new UntypedFormControl('', [Validators.required]),
    city: new UntypedFormControl('', [Validators.required]),
    country: new UntypedFormControl('', [Validators.required]),
    mail: new UntypedFormControl('', [Validators.required]),
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

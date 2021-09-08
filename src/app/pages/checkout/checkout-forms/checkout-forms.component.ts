import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from '@vcl/ng-vcl';

@Component({
  selector: 'app-checkout-forms',
  templateUrl: './checkout-forms.component.html',
  styleUrls: ['./checkout-forms.component.scss']
})

export class CheckoutFormsComponent implements OnInit {

  private translateService: TranslateService;

  constructor(private notifier: NotifierService, private secondService: TranslateService) {
    this.translateService = this.secondService;
  }

  ngOnInit(): void {
  }

  homeDeliveryForm = new FormGroup({
    gender: new FormControl(null, Validators.required),
    firstName: new FormControl('', [
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.required,
    ]),
    streetName: new FormControl('', [
      Validators.required,
    ]),
    houseNumber: new FormControl('', [
      Validators.required,
    ]),
    postcode: new FormControl('', [
      Validators.required,
    ]),
    city: new FormControl('', [
      Validators.required,
    ]),
    country: new FormControl('', [
      Validators.required,
    ]),
    mail: new FormControl('', [
      Validators.required,
    ])
  });

  homeDeliverySubmit() {
    if (this.homeDeliveryForm.valid) {
      console.log(this.homeDeliveryForm.value);
    } else {
      this.notifier.error('Bitte füllen Sie das Formular ganz aus.');
    }
  }

  parcelShopForm = new FormGroup({
    gender: new FormControl(null, Validators.required),
    firstName: new FormControl('', [
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.required,
    ]),
    streetName: new FormControl('', [
      Validators.required,
    ]),
    houseNumber: new FormControl('', [
      Validators.required,
    ]),
    postcode: new FormControl('', [
      Validators.required,
    ]),
    city: new FormControl('', [
      Validators.required,
    ]),
    country: new FormControl('', [
      Validators.required,
    ]),
    mail: new FormControl('', [
      Validators.required,
    ]),
    psGender: new FormControl(null, Validators.required),
    psFirstName: new FormControl('', [
      Validators.required,
    ]),
    psLastName: new FormControl('', [
      Validators.required,
    ]),
    psPostNumber: new FormControl('', [
      Validators.required,
    ]),
  });

  parcelShopSubmit() {
    if (this.parcelShopForm.valid) {
      console.log(this.homeDeliveryForm.value);
    } else {
      this.notifier.error('Bitte füllen Sie das Formular ganz aus.');
    }
  }

  clickAndCollectForm = new FormGroup({
    gender: new FormControl(null, Validators.required),
    firstName: new FormControl('', [
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.required,
    ]),
    streetName: new FormControl('', [
      Validators.required,
    ]),
    houseNumber: new FormControl('', [
      Validators.required,
    ]),
    postcode: new FormControl('', [
      Validators.required,
    ]),
    city: new FormControl('', [
      Validators.required,
    ]),
    country: new FormControl('', [
      Validators.required,
    ]),
    mail: new FormControl('', [
      Validators.required,
    ])
  });

  clickAndCollectSubmit() {
    if (this.clickAndCollectForm.valid) {
      console.log(this.homeDeliveryForm.value);
    } else {
      this.notifier.error('Bitte füllen Sie das Formular ganz aus.');
    }
  }
}

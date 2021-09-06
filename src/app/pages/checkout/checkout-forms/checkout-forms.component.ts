import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-checkout-forms',
  templateUrl: './checkout-forms.component.html',
  styleUrls: ['./checkout-forms.component.scss']
})

export class CheckoutFormsComponent implements OnInit {

  private translateService: TranslateService;

  constructor(private secondService: TranslateService) {
    this.translateService = this.secondService;
  }

  @ViewChild('form')
  form: NgForm;

  ngOnInit(): void {
  }

  DeliveryForm = new FormGroup({
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

  PackingForm = new FormGroup({
    gender: new FormControl(null, Validators.required),
    firstName: new FormControl('', [
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.required,
    ]),
    postNumber: new FormControl('', [
      Validators.required,
    ]),
  });

}

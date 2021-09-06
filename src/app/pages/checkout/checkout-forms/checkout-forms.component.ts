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

  formGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.required,
    ]),
    gender: new FormControl(null, Validators.required)
  });

}

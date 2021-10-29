import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Money } from '@restorecommerce/cart/lib/model/primitives';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {

  private dataService: CartService;


  constructor(private service: CartService) { 
    this.dataService = this.service;
  }

  deliveryMethod = 'standard';

  ngOnInit(): void {
  }

  voucherForm = new FormGroup({
    cardNumber: new FormControl('', [
      Validators.required,
    ]),
    expiryDate: new FormControl('', [
      Validators.required,
    ]),
    securityCode: new FormControl('', [
      Validators.required,
    ]),
    cardHolder: new FormControl('', [
      Validators.required,
    ]),
  });

  voucherSubmit() {
    if (this.voucherForm.valid) {
      console.log(this.voucherForm.value);
    }
  }

  public getCartTotalGross(): string {
    return this.dataService.round(this.dataService.getCartTotalGross());
  }

  public getCartShipping(): Money {
    return this.dataService.getCartShipping();
  }

  public getTaxes(): string {
    return this.dataService.round(Number(this.getCartTotalGross()) - Number(this.getCartTotalNet()));
  }

  public getCartTotalNet(): string {
    return this.dataService.round(this.dataService.getCartTotalNet());
  }
}

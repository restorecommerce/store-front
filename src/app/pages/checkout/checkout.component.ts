import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [CheckoutService],
})
export class CheckoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})

export class DeliveryComponent implements OnInit {

  private dataService: CartService;

  constructor(private service: CartService) {
    this.dataService = this.service;
  }

  ngOnInit(): void {}

  public screenWidth() {
    return this.dataService.getScreenSize();
  }

  public desktopWidth() {
    return this.dataService.desktopSize();
  }

  public tabletWidth() {
    return this.dataService.tabletSize();
  }
}


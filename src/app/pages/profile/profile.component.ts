import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  private dataService: CartService;

  public password: string = '';
  public email: string = '';
  public remember: boolean  = false;

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


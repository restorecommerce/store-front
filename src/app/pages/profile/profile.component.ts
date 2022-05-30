import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public password: string = '';
  public email: string = '';
  public remember: boolean = false;

  constructor(private displayService: ScreenService) {}

  ngOnInit(): void {}

  screenWidth() {
    return this.displayService.getScreenSize();
  }

  desktopWidth() {
    return this.displayService.desktopSize();
  }

  tabletWidth() {
    return this.displayService.tabletSize();
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.scss'],
})
export class FooterTopComponent implements OnInit {
  constructor(private screenService: ScreenService) {}

  ngOnInit(): void {}

  screenWidth() {
    return this.screenService.getScreenSize();
  }

  desktopWidth() {
    return this.screenService.desktopSize();
  }
}

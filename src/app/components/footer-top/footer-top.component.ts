import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.scss'],
})
export class FooterTopComponent implements OnInit {
  constructor(private displayService: DisplayService) {}

  ngOnInit(): void {}

  screenWidth() {
    return this.displayService.getScreenSize();
  }

  desktopWidth() {
    return this.displayService.desktopSize();
  }
}

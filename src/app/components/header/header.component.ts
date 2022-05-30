import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private displayService: ScreenService) {}

  ngOnInit(): void {}

  public screenWidth() {
    return this.displayService.getScreenSize();
  }

  public desktopWidth() {
    return this.displayService.desktopSize();
  }

  public tabletWidth() {
    return this.displayService.tabletSize();
  }
}

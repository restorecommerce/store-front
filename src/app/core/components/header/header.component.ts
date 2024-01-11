import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private displayService: ScreenService) {}

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

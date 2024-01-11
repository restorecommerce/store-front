import { Component } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.scss'],
})
export class FooterTopComponent {
  constructor(private screenService: ScreenService) {}

  screenWidth() {
    return this.screenService.getScreenSize();
  }

  desktopWidth() {
    return this.screenService.desktopSize();
  }
}

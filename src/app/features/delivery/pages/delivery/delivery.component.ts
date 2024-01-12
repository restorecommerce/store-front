import { Component } from '@angular/core';
import { ScreenService } from 'src/app/core/services/screen.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent {
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

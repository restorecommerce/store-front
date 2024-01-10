import { Component } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public password: string = '';
  public email: string = '';
  public remember: boolean = false;

  constructor(private displayService: ScreenService) {}

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

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DisplayService {
  desktopSize(): number {
    return 1400;
  }

  tabletSize(): number {
    return 768;
  }

  getScreenSize(): number {
    return document.body.clientWidth;
  }

  getScreenWidth(): number {
    return window.screen.width;
  }
}

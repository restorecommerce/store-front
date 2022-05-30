import { Injectable, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScreenService implements OnDestroy {
  destroyed = new Subject<void>();
  public mediaBreakpoint$ = new BehaviorSubject<string>(null);

  /* 
  {
    '(max-width: 599.98px)' => 'xs',
    '(min-width: 600px) and (max-width: 959.98px)' => 's',
    '(min-width: 960px) and (max-width: 1279.98px)' => 'm',
    '(min-width: 1280px) and (max-width: 1919.98px)' => 'l',
    '(min-width: 1920px)' => 'xl'
  }
  */

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'xs'],
    [Breakpoints.Small, 's'],
    [Breakpoints.Medium, 'm'],
    [Breakpoints.Large, 'l'],
    [Breakpoints.XLarge, 'xl'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
            this.mediaBreakpoint$.next(currentScreenSize);
          }
        }
      });
  }
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
    this.mediaBreakpoint$.complete();
    console.log('Destroyed!!!');
  }

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

import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopClickPropagation]',
})
export class StopClickPropagationDirective {
  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    event.stopPropagation();
  }
}

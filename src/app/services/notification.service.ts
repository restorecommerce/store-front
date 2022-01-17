import { Injectable } from '@angular/core';
import { NotifierPosition, NotifierService } from '@vcl/ng-vcl';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notifier: NotifierService) {}

  public success() {
    this.notifier.success({
      content: 'Item added to cart',
      position: NotifierPosition.TopLeft,
    });
  }
}

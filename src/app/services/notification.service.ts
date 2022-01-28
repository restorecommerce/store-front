import { Injectable } from '@angular/core';
import { NotifierPosition, NotifierService } from '@vcl/ng-vcl';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notifier: NotifierService) {}

  success(message: string) {
    this.notifier.success({
      content: message,
      position: NotifierPosition.TopLeft,
    });
  }

  error(message: string) {
    this.notifier.error({
      content: message,
      position: NotifierPosition.TopLeft,
    });
  }
}

import { Injectable } from '@angular/core';
import { NotifierPosition, NotifierService } from '@vcl/ng-vcl';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifier: NotifierService) {}

  public success() {
    this.notifier.success({
      content: 'Artikel in den Warenkorb gelegt',
      position: NotifierPosition.TopLeft
    });
  }

}

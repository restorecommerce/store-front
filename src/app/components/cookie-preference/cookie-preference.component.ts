import { Component, OnInit, Optional } from '@angular/core';
import { ComponentLayerRef } from '@vcl/ng-vcl';

@Component({
  selector: 'app-cookie-preference',
  templateUrl: './cookie-preference.component.html',
  styleUrls: ['./cookie-preference.component.scss'],
})
export class CookiePreferenceComponent implements OnInit {
  constructor(@Optional() private layer?: ComponentLayerRef) {}

  allPreferences = {
    necessary: true,
    marketing: true,
    functional: true,
    analytics: true,
  };

  ngOnInit(): void {}

  close(newPrefernces: {} = {}) {
    const references = { ...this.allPreferences, ...newPrefernces };
    this.layer && this.layer.close(references);
  }
}

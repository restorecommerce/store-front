import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayerRef, LayerService } from '@vcl/ng-vcl';
import { CookiePreferenceComponent } from './components/cookie-preference/cookie-preference.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  cookiesSettingLayer: LayerRef;

  cookiesExists = false;

  constructor(
    private translate: TranslateService,
    private layerService: LayerService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.cookiesSettingLayer = this.layerService.create(
      CookiePreferenceComponent,
      {
        closeOnBackdropClick: false,
        closeOnEscape: false,
      }
    );
  }

  openComponentLayer() {
    this.cookiesSettingLayer.open().subscribe((result) => {});
  }

  ngAfterViewInit(): void {
    if (!this.cookiesExists) {
      //this.openComponentLayer();
    }
  }
}

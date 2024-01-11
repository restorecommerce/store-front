import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceTeaserComponent } from './components/service-teaser/service-teaser.component';
import { PromotionBarComponent } from './components/promotion-bar/promotion-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopPromotionComponent } from './components/top-promotion/top-promotion.component';
import { NewsletterBarComponent } from './components/newsletter-bar/newsletter-bar.component';
import { FooterTopComponent } from './components/footer-top/footer-top.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuLayerContentComponent } from './components/menu-layer-content/menu-layer-content.component';
import { MenuLayerTitleComponent } from './components/menu-layer-title/menu-layer-title.component';
import {
  VCLFlipSwitchModule,
  VCLFormControlGroupModule,
  VCLSelectListModule,
  VCLSelectModule,
} from '@vcl/ng-vcl';
import { SharedModule } from '../shared/shared.module';
import { CartModule } from '../features/cart/cart.module';
import { CookiePreferenceComponent } from './components/cookie-preference/cookie-preference.component';

const vclModules = [
  VCLSelectModule,
  VCLSelectListModule,
  // VCLTabNavModule,
  VCLFormControlGroupModule,
  VCLFlipSwitchModule,
];

const components = [
  ServiceTeaserComponent,
  PromotionBarComponent,
  NavigationComponent,
  TopBarComponent,
  TopPromotionComponent,
  NewsletterBarComponent,
  FooterTopComponent,
  HeaderComponent,
  MenuLayerContentComponent,
  MenuLayerTitleComponent,
  CookiePreferenceComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, CartModule, SharedModule, ...vclModules],
  exports: [...components],
})
export class CoreModule {}

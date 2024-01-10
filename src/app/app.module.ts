import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  VCLDrawerModule,
  VCLFontAwesomeModule,
  VCLInputModule,
  VCLMaterialDesignModule,
  VCLPasswordInputModule,
  VCLSelectModule,
  VCLSelectListModule,
  VCLFormControlGroupModule,
  VCLTabNavModule,
  VCLRadioButtonModule,
  VCLFlipSwitchModule,
  IconResolverService,
} from '@vcl/ng-vcl';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MaterialDesignVCLIconAliasResolverService } from './shared/icon-resolver.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceTeaserComponent } from './components/service-teaser/service-teaser.component';
import { PromotionBarComponent } from './components/promotion-bar/promotion-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopPromotionComponent } from './components/top-promotion/top-promotion.component';
import { NewsletterBarComponent } from './components/newsletter-bar/newsletter-bar.component';
import { FooterTopComponent } from './components/footer-top/footer-top.component';
import { HeaderComponent } from './components/header/header.component';
import { CookiePreferenceComponent } from './components/cookie-preference/cookie-preference.component';

import {
  LAZYLOAD_IMAGE_HOOKS,
  LazyLoadImageModule,
  ScrollHooks,
} from 'ng-lazyload-image';
import { ClickStopPropagation } from './shared/click-stop-propagation.directive';
import { CartLayerItemComponent } from './components/cart-layer-item/cart-layer-item.component';
import { CartLayerContentsComponent } from './components/cart-layer-contents/cart-layer-contents.component';
import { MenuLayerContentComponent } from './components/top-bar/menu-layer-content/menu-layer-content.component';
import { MenuLayerTitleComponent } from './components/top-bar/menu-layer-title/menu-layer-title.component';
import { HoverColorPickerDirective } from './directives/hover-color-picker-directive.service';
import { GraphQLModule } from './graphql.module';
import { ProductsModule } from './features/products/products.module';
import { SharedModule } from './shared/shared.module';
import { CheckoutModule } from './features/checkout/checkout.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const vclModules = [
  VCLDrawerModule,
  VCLFontAwesomeModule,
  VCLInputModule,
  VCLMaterialDesignModule,
  VCLPasswordInputModule,
  VCLSelectModule,
  VCLSelectListModule,
  VCLTabNavModule,
  VCLRadioButtonModule,
  VCLFormControlGroupModule,
  VCLFlipSwitchModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceTeaserComponent,
    PromotionBarComponent,
    NavigationComponent,
    TopBarComponent,
    TopPromotionComponent,
    NewsletterBarComponent,
    FooterTopComponent,
    HeaderComponent,
    ClickStopPropagation,
    CartLayerItemComponent,
    CartLayerContentsComponent,
    MenuLayerContentComponent,
    MenuLayerTitleComponent,
    CookiePreferenceComponent,
    HoverColorPickerDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ProductsModule,
    CheckoutModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    GraphQLModule,
    OverlayModule,
    ScrollingModule,
    ...vclModules,
    SharedModule,
  ],
  exports: [TranslateModule],
  providers: [
    TranslateService,
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks },
    {
      provide: IconResolverService,
      useClass: MaterialDesignVCLIconAliasResolverService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

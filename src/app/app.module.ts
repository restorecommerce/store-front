import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  VCLDrawerModule,
  VCLFontAwesomeModule,
  VCLGalleryModule,
  VCLInputModule,
  VCLMaterialDesignModule,
  VCLPasswordInputModule,
  VCLSelectModule,
  VCLSelectListModule,
  VCLZoomBoxModule,
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
import { ClickAndCollectComponent } from './pages/click-and-collect/click-and-collect.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReturnsComponent } from './pages/returns/returns.component';
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
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderOverviewComponent } from './pages/checkout/order-overview/order-overview.component';
import { CheckoutFormsComponent } from './pages/checkout/checkout-forms/checkout-forms.component';
import { CheckoutPaymentComponent } from './pages/checkout/checkout-payment/checkout-payment.component';
import { CheckoutDeliveryComponent } from './pages/checkout/checkout-delivery/checkout-delivery.component';
import { ClickStopPropagation } from './shared/click-stop-propagation.directive';
import { CartLayerItemComponent } from './components/cart-layer-item/cart-layer-item.component';
import { CartLayerContentsComponent } from './components/cart-layer-contents/cart-layer-contents.component';
import { MenuLayerContentComponent } from './components/top-bar/menu-layer-content/menu-layer-content.component';
import { MenuLayerTitleComponent } from './components/top-bar/menu-layer-title/menu-layer-title.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { HoverColorPickerDirective } from './directives/hover-color-picker-directive.service';
import { GraphQLModule } from './graphql.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

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
    ClickAndCollectComponent,
    DeliveryComponent,
    ProfileComponent,
    ReturnsComponent,
    ServiceTeaserComponent,
    PromotionBarComponent,
    NavigationComponent,
    TopBarComponent,
    TopPromotionComponent,
    NewsletterBarComponent,
    FooterTopComponent,
    HeaderComponent,
    CheckoutComponent,
    OrderOverviewComponent,
    CheckoutFormsComponent,
    CheckoutPaymentComponent,
    CheckoutDeliveryComponent,
    ClickStopPropagation,
    CartLayerItemComponent,
    CartLayerContentsComponent,
    MenuLayerContentComponent,
    MenuLayerTitleComponent,
    CookiePreferenceComponent,
    PrivacyPolicyComponent,
    ImprintComponent,
    HoverColorPickerDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ProductsModule,
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
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    OverlayModule,
    ScrollingModule,
    ...vclModules,
    SharedModule
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

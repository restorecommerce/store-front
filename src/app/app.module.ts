import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { VCLBadgeModule, VCLBusyIndicatorModule, VCLButtonModule, VCLCheckboxModule, VCLDrawerModule, VCLFontAwesomeModule, VCLGalleryModule,
  VCLIcogramModule, VCLIconModule, VCLInputModule, VCLLayerModule, VCLMaterialDesignModule, VCLNavigationModule, VCLNotifierModule,
  VCLPanelModule, VCLPasswordInputModule, VCLSelectModule, VCLSelectListModule, VCLZoomBoxModule, VCLFormControlGroupModule, VCLTabNavModule, VCLRadioButtonModule } from "@vcl/ng-vcl";
import { TranslateModule, TranslateLoader, TranslateService } from  '@ngx-translate/core';
import { TranslateHttpLoader } from  '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProductSizePickerComponent } from './components/product-size-picker/product-size-picker.component';
import { ProductZoomComponent } from './components/product-zoom/product-zoom.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ClickAndCollectComponent } from './pages/click-and-collect/click-and-collect.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductComponent } from './pages/product/product.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductInterestComponent } from './components/product-interest/product-interest.component';
import { ProductMainComponent } from './components/product-main/product-main.component';
import { ProductRecommendComponent } from './components/product-recommend/product-recommend.component';
import { ProductNavigationComponent } from './components/product-navigation/product-navigation.component';
import { ServiceTeaserComponent } from './components/service-teaser/service-teaser.component';
import { PromotionBarComponent } from './components/promotion-bar/promotion-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopPromotionComponent } from './components/top-promotion/top-promotion.component';
import { NewsletterBarComponent } from './components/newsletter-bar/newsletter-bar.component';
import { FooterTopComponent } from './components/footer-top/footer-top.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderOverviewComponent } from './pages/checkout/order-overview/order-overview.component';
import { CheckoutFormsComponent } from './pages/checkout/checkout-forms/checkout-forms.component';
import { CheckoutPaymentComponent } from './pages/checkout/checkout-payment/checkout-payment.component';

export  function  HttpLoaderFactory(http:  HttpClient) {
  return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ProductGalleryComponent,
    ProductSizePickerComponent,
    ProductZoomComponent,
    ProductDescriptionComponent,
    ClickAndCollectComponent,
    DeliveryComponent,
    HomeComponent,
    ProfileComponent,
    ProductComponent,
    ReturnsComponent,
    ProductInfoComponent,
    ProductInterestComponent,
    ProductMainComponent,
    ProductRecommendComponent,
    ProductNavigationComponent,
    ServiceTeaserComponent,
    PromotionBarComponent,
    NavigationComponent,
    TopBarComponent,
    TopPromotionComponent,
    NewsletterBarComponent,
    FooterTopComponent,
    HeaderComponent,
    ProductsComponent,
    ShoesComponent,
    CheckoutComponent,
    OrderOverviewComponent,
    CheckoutFormsComponent,
    CheckoutPaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule,
    TranslateModule.forRoot({
      loader: {
        provide:  TranslateLoader,
        useFactory:  HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    ScrollingModule,
    VCLBadgeModule,
    VCLBusyIndicatorModule,
    VCLButtonModule,
    VCLCheckboxModule,
    VCLDrawerModule,
    VCLFontAwesomeModule,
    VCLGalleryModule,
    VCLIcogramModule,
    VCLIconModule,
    VCLInputModule,
    VCLLayerModule,
    VCLMaterialDesignModule,
    VCLNavigationModule,
    VCLNotifierModule,
    VCLPanelModule,
    VCLPasswordInputModule,
    VCLSelectModule,
    VCLSelectListModule,
    VCLTabNavModule,
    VCLRadioButtonModule,
    VCLZoomBoxModule,
    VCLFormControlGroupModule
  ],
  exports: [TranslateModule],
  providers: [
    TranslateService,
    {provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


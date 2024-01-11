import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { VCLDrawerModule, IconResolverService } from '@vcl/ng-vcl';
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

import {
  LAZYLOAD_IMAGE_HOOKS,
  LazyLoadImageModule,
  ScrollHooks,
} from 'ng-lazyload-image';
import { ClickStopPropagation } from './shared/click-stop-propagation.directive';
import { HoverColorPickerDirective } from './directives/hover-color-picker-directive.service';
import { GraphQLModule } from './graphql.module';
import { ProductsModule } from './features/products/products.module';
import { SharedModule } from './shared/shared.module';
import { CheckoutModule } from './features/checkout/checkout.module';
import { CartModule } from './features/cart/cart.module';
import { CoreModule } from './core/core.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const vclModules = [];

@NgModule({
  declarations: [AppComponent, ClickStopPropagation, HoverColorPickerDirective],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    CoreModule,
    ProductsModule,
    CheckoutModule,
    CartModule,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ProductVariantsComponent } from './pages/product-variants/product-variants.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductColorPickerComponent } from './components/product-color-picker/product-color-picker.component';
import { ProductInterestComponent } from './components/product-interest/product-interest.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProductNavigationComponent } from './components/product-navigation/product-navigation.component';
import { ProductMainComponent } from './components/product-main/product-main.component';
import { ProductRecommendComponent } from './components/product-recommend/product-recommend.component';
import { ProductSizePickerComponent } from './components/product-size-picker/product-size-picker.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import {
  VCLGalleryModule,
  VCLSelectListModule,
  VCLSelectModule,
  VCLZoomBoxModule,
} from '@vcl/ng-vcl';
import { ProductZoomComponent } from './components/product-zoom/product-zoom.component';
import { ProductVariantCardComponent } from './components/product-variant-card/product-variant-card.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsComponent } from './pages/products/products.component';

const vclModules = [
  VCLSelectModule,
  VCLSelectListModule,
  VCLZoomBoxModule,
  VCLGalleryModule,
];

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsLayoutComponent,
        children: [
          {
            path: '',
            component: ProductListComponent,
          },
          {
            path: ':productId',
            component: ProductVariantsComponent,
          },
        ],
      },
      {
        path: ':productId/variants/:variantId',
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductVariantsComponent,
    ProductComponent,
    ProductCardComponent,
    ProductColorPickerComponent,
    ProductDescriptionComponent,
    ProductInterestComponent,
    ProductGalleryComponent,
    ProductInfoComponent,
    ProductMainComponent,
    ProductNavigationComponent,
    ProductRecommendComponent,
    ProductSizePickerComponent,
    ProductZoomComponent,
    ProductVariantCardComponent,
    ProductListComponent,
    ProductsLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ...vclModules,
  ],
})
export class ProductsModule {}

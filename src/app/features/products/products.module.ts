import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoesComponent } from './components/shoes/shoes.component';
import { ShoesProductsComponent } from './components/shoes-products/shoes-products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductVariantsComponent } from './components/product-variants/product-variants.component';
import { ProductsTemplateComponent } from './templates/products-template/products-template.component';
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
import { ProductsComponent } from './components/products/products.component';
import {
  VCLGalleryModule,
  VCLSelectListModule,
  VCLSelectModule,
  VCLZoomBoxModule,
} from '@vcl/ng-vcl';
import { ProductZoomComponent } from './components/product-zoom/product-zoom.component';

const vclModules = [
  VCLSelectModule,
  VCLSelectListModule,
  VCLZoomBoxModule,
  VCLGalleryModule,
];

const routes: Routes = [
  {
    path: 'products',
    component: ShoesComponent,
    children: [
      {
        path: '',
        component: ShoesProductsComponent,
      },
      {
        path: ':productId/variants/:variantId',
        component: ProductComponent,
      },
      {
        path: ':productId',
        component: ProductVariantsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ShoesComponent,
    ShoesProductsComponent,
    ProductComponent,
    ShoesProductsComponent,
    ProductVariantsComponent,
    ProductsTemplateComponent,
    ProductComponent,
    ProductsComponent,
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
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ...vclModules,
  ],
})
export class ProductsModule {}

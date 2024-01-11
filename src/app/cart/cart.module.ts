import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartLayerItemComponent } from './components/cart-layer-item/cart-layer-item.component';
import { CartLayerContentsComponent } from './components/cart-layer-contents/cart-layer-contents.component';
import { SharedModule } from '../shared/shared.module';
import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLSelectModule,
} from '@vcl/ng-vcl';

const components = [CartLayerContentsComponent, CartLayerItemComponent];

const vclModules = [VCLInputModule, VCLSelectModule, VCLFormControlGroupModule];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule, ...vclModules],
  exports: [...components],
})
export class CartModule {}

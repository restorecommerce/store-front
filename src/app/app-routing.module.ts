import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickAndCollectComponent } from './pages/click-and-collect/click-and-collect.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductComponent } from './pages/product/product.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { ShoesComponent } from './pages/shoes/shoes.component';


const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'returns',
    component: ReturnsComponent
  },
  {
    path: 'click-and-collect',
    component: ClickAndCollectComponent
  },
  {
    path: 'delivery',
    component: DeliveryComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'shoes',
    component: ShoesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

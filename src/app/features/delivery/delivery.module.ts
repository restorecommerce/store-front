import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DeliveryComponent,
  },
];

@NgModule({
  declarations: [DeliveryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DeliveryModule {}

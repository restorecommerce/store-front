import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DeliveryComponent,
  },
];

@NgModule({
  declarations: [DeliveryComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DeliveryModule {}

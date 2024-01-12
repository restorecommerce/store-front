import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickAndCollectComponent } from './pages/click-and-collect/click-and-collect.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ClickAndCollectComponent,
  },
];

@NgModule({
  declarations: [ClickAndCollectComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ClickAndCollectModule {}

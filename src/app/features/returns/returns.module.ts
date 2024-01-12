import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReturnsComponent } from './pages/returns/returns.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ReturnsComponent,
  },
];

@NgModule({
  declarations: [ReturnsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ReturnsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLPasswordInputModule,
  VCLRadioButtonModule,
} from '@vcl/ng-vcl';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

const vclModules = [
  VCLInputModule,
  VCLPasswordInputModule,
  VCLRadioButtonModule,
  VCLFormControlGroupModule,
  // VCLIconModule,
  // VCLIcogramModule,
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ...vclModules,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class UserProfileModule {}

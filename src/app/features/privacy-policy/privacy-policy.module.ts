import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PrivacyPolicyModule {}

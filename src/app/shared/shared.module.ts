import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  VCLBadgeModule,
  VCLBusyIndicatorModule,
  VCLButtonModule,
  VCLCheckboxModule,
  VCLIcogramModule,
  VCLIconModule,
  VCLLayerModule,
  VCLNavigationModule,
  VCLNotifierModule,
  VCLPanelModule,
} from '@vcl/ng-vcl';
import { TranslateModule } from '@ngx-translate/core';

const vclModules = [
  VCLBadgeModule,
  VCLBusyIndicatorModule,
  VCLButtonModule,
  VCLCheckboxModule,
  VCLIcogramModule,
  VCLIconModule,
  VCLLayerModule,
  VCLNavigationModule,
  VCLNotifierModule,
  VCLPanelModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...vclModules, TranslateModule],
})
export class SharedModule {}

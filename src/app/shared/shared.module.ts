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
import { FormsModule } from '@angular/forms';
import { StopClickPropagationDirective } from './click-stop-propagation.directive';

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

const directives = [StopClickPropagationDirective];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule],
  exports: [TranslateModule, FormsModule, ...vclModules, ...directives],
})
export class SharedModule {}

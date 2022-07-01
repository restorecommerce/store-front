import { Injectable } from '@angular/core';
import { IconAliasResolverServiceBase } from '@vcl/ng-vcl';
import { ALIAS_MAP } from './icon-alias-map';

@Injectable()
export class MaterialDesignVCLIconAliasResolverService extends IconAliasResolverServiceBase {
  constructor() {
    super('vcl', ALIAS_MAP as any);
  }
}

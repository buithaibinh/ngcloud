import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CoreStoreModule } from './store';
import { AppEffectsModules } from './effects';

import { CORE_SERVICES } from './services';

@NgModule({
  imports: [
    CoreStoreModule,
    // ...AppEffectModules(AppEffects, EffectsModule.run),
    ...AppEffectsModules,
  ],
  declarations: [
  ],
  exports: [
    CoreStoreModule,
  ],
  providers: [
    ...CORE_SERVICES,
  ]
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   throwIfAlreadyLoaded(parentModule, 'CoreModule');
  // }
}

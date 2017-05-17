import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared';
import { LangSwitcherComponent } from './lang-switcher.component';

@NgModule({
  imports: [SharedModule],
  exports: [LangSwitcherComponent],
  declarations: [LangSwitcherComponent],
  providers: [],
})
export class LangSwitcherModule { }

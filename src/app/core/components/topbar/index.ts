import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared';
import { LangSwitcherModule } from '../lang-switcher';
import { TopbarComponent } from './topbar.component';

@NgModule({
    imports: [SharedModule, LangSwitcherModule],
    exports: [TopbarComponent],
    declarations: [TopbarComponent],
    providers: [],
})
export class TopbarModule { }

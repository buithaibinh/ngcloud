import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared';
import { LangSwitcherModule } from '../lang-switcher';
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [SharedModule, LangSwitcherModule],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
    providers: [],
})
export class NavbarModule { }

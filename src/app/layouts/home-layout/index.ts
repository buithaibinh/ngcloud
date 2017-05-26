import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/index';

import { TopbarModule } from '../../core/components/topbar';

import { HomeRouting } from './home.routes'
import { HomeLayoutComponent } from './home-layout.component';
import { MenuItems } from './menu-items';

@NgModule({
    imports: [SharedModule, HomeRouting, TopbarModule],
    exports: [],
    declarations: [HomeLayoutComponent],
    providers: [MenuItems],
})
export class HomeModule { }

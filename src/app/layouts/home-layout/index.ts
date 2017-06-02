import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/index';
import { ADMIN_CONTAINER_MODULES } from '../../containers/index';
import { TopbarModule } from '../../core/components/topbar';

import { HomeLayoutComponent } from './home-layout.component';
import { MenuItems } from './menu-items';

@NgModule({
    imports: [SharedModule, TopbarModule, ADMIN_CONTAINER_MODULES],
    exports: [],
    declarations: [HomeLayoutComponent],
    providers: [MenuItems],
})
export class HomeLayoutModule { }

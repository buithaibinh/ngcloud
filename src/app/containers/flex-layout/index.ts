import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/index';

import { FlexRoutingModule } from './routing';
import { FlexLayoutComponent } from './flex-layout.component';

@NgModule({
    imports: [FlexRoutingModule, SharedModule],
    exports: [FlexLayoutComponent],
    declarations: [FlexLayoutComponent],
    providers: [],
})
export class FlexModule { }

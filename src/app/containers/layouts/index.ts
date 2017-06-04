import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { GoldenLayoutComponent } from './golden-layout/golden-layout.component';
import { LayoutRoutes } from './layouts-routing';

@NgModule({
    imports: [
        RouterModule.forChild(LayoutRoutes),
        SharedModule,
    ],
    exports: [],
    declarations: [FlexLayoutComponent, GoldenLayoutComponent],
    providers: [],
})
export class LayoutsModule { }

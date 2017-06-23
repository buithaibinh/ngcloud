import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { GoldenLayoutComponent, RainyComponent, SunnyComponent, FoggyComponent } from './golden-layout/golden-layout.component';
import { LayoutRoutes } from './layouts-routing';

@NgModule({
    imports: [
        RouterModule.forChild(LayoutRoutes),
        SharedModule,
    ],
    exports: [FlexLayoutComponent, GoldenLayoutComponent],
    declarations: [FlexLayoutComponent, GoldenLayoutComponent, RainyComponent, SunnyComponent, FoggyComponent],
    providers: [],
    entryComponents: [RainyComponent, SunnyComponent, FoggyComponent]
})
export class LayoutsModule { }

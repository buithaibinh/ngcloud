import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

import { IconsComponent } from './icons.component';
import { IconsRoutingModule } from './icons.routing';

@NgModule({
    imports: [IconsRoutingModule, MaterialModule],
    exports: [IconsComponent],
    declarations: [IconsComponent],
    providers: [],
})
export class IconsModule { }

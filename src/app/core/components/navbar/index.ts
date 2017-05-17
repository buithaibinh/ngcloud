import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';

import { SharedModule } from '../../../shared';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [SharedModule],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
    providers: [],
})
export class NavbarModule { }

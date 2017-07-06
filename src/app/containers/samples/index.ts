import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { InvoiceComponent } from './invoice/invoice.component';
import { SamplesRoutes } from './samples-routing';

@NgModule({
    imports: [
        RouterModule.forChild(SamplesRoutes),
        SharedModule,
    ],
    exports: [],
    declarations: [InvoiceComponent],
    providers: [],
})
export class SamplesModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';

import { BlankComponent } from './blank/blank.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { UserListComponent } from './user-list/user-list.component';

import { PagesRoutes } from './pages-routing';

const COMPONENTS = [
    BlankComponent,
    GoogleMapComponent,
    InvoiceComponent,
    ProfileComponent,
    SearchResultComponent,
    UserListComponent
]

@NgModule({
    imports: [
        RouterModule.forChild(PagesRoutes),
        SharedModule,
    ],
    exports: [],
    declarations: COMPONENTS,
    providers: [],
})
export class PagesModule { }

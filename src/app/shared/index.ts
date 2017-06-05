import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MultilingualModule } from '../core/i18n/index';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';
import { DragulaModule } from 'ng2-dragula';

// ngx datatable
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NG_TABLE_DIRECTIVES } from 'ng2-table';

// Google map
import { AgmCoreModule } from 'angular2-google-maps/core';

import { COMPONENTS } from './components';
import { PIPES } from './pipes';
import { DIRECTIVES } from './directives';
import { Config } from '../core/config';

import { EXAMPLE_SERVICES } from './services';

export const ANGULAR_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  MaterialModule,
  FlexLayoutModule,
  TranslateModule,
  ChartsModule,
  DragulaModule,
  NgxDatatableModule,
  
];

@NgModule({
  imports: [
    ANGULAR_MODULES,
    AgmCoreModule.forRoot({
      apiKey: Config.GOOGLE_MAP_API_KEY
    }),
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
    NG_TABLE_DIRECTIVES,
  ],
  exports: [
    AgmCoreModule,
    ...ANGULAR_MODULES,
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
    NG_TABLE_DIRECTIVES
  ],
  providers: [
    EXAMPLE_SERVICES
  ],
})
export class SharedModule { }

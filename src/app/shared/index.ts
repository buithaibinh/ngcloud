import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MultilingualModule } from '../core/i18n/index';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';
import { DragulaModule } from 'ng2-dragula';

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
  RouterModule,
  MaterialModule,
  FlexLayoutModule,
  TranslateModule,
  ChartsModule,
  DragulaModule,
];

@NgModule({
  imports: [
    ANGULAR_MODULES,
    AgmCoreModule.forRoot({
      apiKey: Config.GOOGLE_MAP_API_KEY
    })
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    ...ANGULAR_MODULES,
    AgmCoreModule,
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  providers: [
    EXAMPLE_SERVICES
  ]
})
export class SharedModule { }

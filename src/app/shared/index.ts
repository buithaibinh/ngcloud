import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MultilingualModule } from '../core/i18n/index';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';

import { COMPONENTS } from './components';
import { PIPES } from './pipes';
import { DIRECTIVES } from './directives';

export const ANGULAR_MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  MaterialModule,
  FlexLayoutModule,
  TranslateModule,
  ChartsModule
];

@NgModule({
  imports: [
    ANGULAR_MODULES
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    ...ANGULAR_MODULES,
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  providers: [

  ]
})
export class SharedModule { }

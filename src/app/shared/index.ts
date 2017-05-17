import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MultilingualModule } from '../core/i18n/index';

import { COMPONENTS } from './components';
import { PIPES } from './pipes';
import { DIRECTIVES } from './directives';

export const ANGULAR_MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  MaterialModule,
  MultilingualModule
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

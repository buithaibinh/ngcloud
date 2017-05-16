import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { COMPONENTS } from './components';
import { PIPES } from './pipes';
import { DIRECTIVES } from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  providers: [

  ]
})
export class SharedModule { }

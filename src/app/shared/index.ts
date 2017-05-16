import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { COMPONENTS } from './components';
import { PIPES } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...PIPES,
    ...COMPONENTS,
  ],
  providers: [

  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PIPES } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    ...PIPES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...PIPES,
  ],
  providers: [

  ]
})
export class SharedModule { }

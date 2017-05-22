import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlexLayoutComponent } from './flex-layout.component';

const routes: Routes = [
  { path: 'flex-layout', component: FlexLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexRoutingModule { }

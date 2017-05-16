import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core';
import { SharedModule } from './shared';

// AppComponent
import { AppComponent } from './app.component';

/* Root routing */
import { routing, appRoutingProviders } from './app.routes';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app container
import { APP_CORE_MODULES } from './core/components';
import { APP_CONTAINER_MODULES } from './containers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    routing,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,

    SharedModule,
    CoreModule,
    ...APP_CORE_MODULES,
    ...APP_CONTAINER_MODULES
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [
    AppComponent,
  ],
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}

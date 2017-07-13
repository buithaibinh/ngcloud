import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { MiscellaneousRoutes } from './miscellaneous-routing';

import { ErrorComponent } from './error/error.component';
import { Error404Component } from './error404/error404.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RegisterComponent } from './register/register.component';

const COMPONENTS = [
    ErrorComponent,
    Error404Component,
    ForgotPasswordComponent,
    LockScreenComponent,
    LoginComponent,
    MaintenanceComponent,
    RegisterComponent
]

@NgModule({
    imports: [
        RouterModule.forChild(MiscellaneousRoutes),
        SharedModule,
    ],
    exports: [],
    declarations: [COMPONENTS],
    providers: [],
})
export class MiscellaneousModule { }

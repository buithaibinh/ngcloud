import { Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { Error404Component } from './error404/error404.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RegisterComponent } from './register/register.component';

export const MiscellaneousRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'err', pathMatch: 'full' },
            { path: 'err', component: ErrorComponent },
            { path: 'err-404', component: Error404Component },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'lock-screen', component: LockScreenComponent },
            { path: 'login', component: LoginComponent },
            { path: 'maintenance', component: MaintenanceComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
];

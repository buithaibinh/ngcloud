import { Routes, RouterModule } from '@angular/router';

const authProviders = [
];

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [
    authProviders
];

export const routing = RouterModule.forRoot(routes, { useHash: false });

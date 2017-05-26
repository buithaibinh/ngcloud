import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: '',
        component: HomeLayoutComponent,
        children: [{
            path: 'home',
            loadChildren: '../../containers/dashboard/index#DashboardModule'
        }]
    }
];

export const HomeRouting = RouterModule.forRoot(routes);

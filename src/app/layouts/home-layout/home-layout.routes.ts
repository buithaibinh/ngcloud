import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: '',
        component: HomeLayoutComponent,
        children: [{
            path: 'home',
            loadChildren: '../../containers/home/index#HomeModule'
        }]
    }
];

export const HomeLayoutRouting = RouterModule.forRoot(routes);

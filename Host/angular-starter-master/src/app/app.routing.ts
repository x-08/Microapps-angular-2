import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
// import { TodolistRoutes } from './todolist/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    // ...TodolistRoutes,
    { path: 'td', loadChildren: 'app/todolist/todolist.module#TodolistModule' },
    { path: 'mui', loadChildren: 'mui#TodolistModule' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

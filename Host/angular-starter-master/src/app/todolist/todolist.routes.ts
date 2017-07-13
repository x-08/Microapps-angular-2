import { Routes , RouterModule } from '@angular/router';

import { TodolistComponent } from './todolist.component';

 const TodolistRoutes: Routes = [
  { path: 'todolist', component: TodolistComponent }
];

export const todorouting = RouterModule.forChild(TodolistRoutes);

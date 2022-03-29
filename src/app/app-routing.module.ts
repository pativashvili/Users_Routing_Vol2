import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UsersDetailsComponent } from './shared/users-details/users-details.component';
import { UsersListComponent } from './shared/users-list/users-list.component';
import { ShellComponent } from './shell/shell.component';
const routes: Routes = [
  {
    path: 'UserList',
    component: UsersListComponent,
  },
  {
    path: 'UserDetails',
    component: UsersDetailsComponent,
  },
  {
    path: 'home',
    component: ShellComponent,
  },
  {
    path: ' ',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

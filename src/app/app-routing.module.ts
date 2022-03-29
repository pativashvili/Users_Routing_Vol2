import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './modules/home/home.component';
import { UsersDetailsComponent } from './modules/users-details/users-details.component';

const routes: Routes = [
  {
    path: 'UserList',
    loadChildren: () =>
      import('./modules/users-list/user-list.module').then(
        (m) => m.UserListModule
      ),
  },
  {
    path: 'UserDetails',
    loadChildren: () =>
      import('./modules/users-details/users-details.module').then(
        (m) => m.UserDetailsModule
      ),
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ' ',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

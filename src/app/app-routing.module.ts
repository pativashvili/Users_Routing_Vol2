import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
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
    path: 'Home',
    component: HomeComponent,
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

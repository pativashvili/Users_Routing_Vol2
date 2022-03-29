import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { UserListRoutingModule } from './user-list-routing.module';

@NgModule({
  declarations: [UsersListComponent],

  imports: [CommonModule, UserListRoutingModule],
})
export class UserListModule {}

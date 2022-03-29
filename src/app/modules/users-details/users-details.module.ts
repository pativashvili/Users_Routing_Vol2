import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDetailsComponent } from './users-details.component';
import { UsersDetailsRoutingModule } from './users-details-routing.module';

@NgModule({
  declarations: [UsersDetailsComponent],
  imports: [CommonModule, UsersDetailsRoutingModule],
})
export class UserDetailsModule {}

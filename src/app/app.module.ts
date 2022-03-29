import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { UsersListComponent } from './shared/users-list/users-list.component';
import { UsersDetailsComponent } from './shared/users-details/users-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    UsersListComponent,
    UsersDetailsComponent,
  ],
  imports: [AppRoutingModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: User[] | undefined;
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.usersService.loadUsers().then((data) => (this.users = data));
  }

  getUsersInfo(id: number) {
    this.router.navigate(['UserDetails'], {
      queryParams: {
        id,
      },
    });
  }
}

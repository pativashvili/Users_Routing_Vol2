import { Injectable } from '@angular/core';
import { User, UserDetails } from '../models/users.model';
import { default as aboutUsers } from '../aboutUsers.json';
import { default as users } from '../users.json';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  loadUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve) => resolve(users));
  }

  loadUsersInfo(id: number): Promise<UserDetails> {
    return new Promise<UserDetails>((resolve) =>
      resolve(aboutUsers.find((r: UserDetails) => r.id === id))
    );
  }
}

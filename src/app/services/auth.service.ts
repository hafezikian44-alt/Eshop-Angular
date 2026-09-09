import { Injectable } from '@angular/core';
import { IUserDto } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  localStorageUsers?: string | null;
  users?: IUserDto[];
  localStorageCurrenUser?: string | null;
  currenUser?: IUserDto;
  isUserLoggedIn?: boolean = false;

  constructor() {
    this.localStorageUsers = localStorage.getItem('users');
    if (this.localStorageUsers) {
      this.users = JSON.parse(this.localStorageUsers);
    }
    this.localStorageCurrenUser = localStorage.getItem('currentUser');
    if (this.localStorageCurrenUser) {
      this.currenUser = JSON.parse(this.localStorageCurrenUser);
    }
    if (this.currenUser) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }
  addUserToLocalStorage() {
    const users = JSON.stringify(this.users);
    localStorage.setItem('users', users);
  }
  addCurrensUserToLocalStorage() {
    const currentUser = JSON.stringify(this.currenUser);
    localStorage.setItem('currentUser', currentUser);
  }
  signUp(username: string, password: string, email: string) {
    const id: string = crypto.randomUUID();
    const newUser: IUserDto = {
      id,
      username,
      password,
      email,
    };
    this.users?.push(newUser);
    this.currenUser = newUser;
    this.addUserToLocalStorage();
    this.addCurrensUserToLocalStorage();
    return this.currenUser;
  }
  signIn(username: string) {
    this.users?.filter((user) => {
      if (user.username !== username) {
        this.currenUser = user;
      }
      this.addCurrensUserToLocalStorage();
      return this.currenUser;
    });
  }
}

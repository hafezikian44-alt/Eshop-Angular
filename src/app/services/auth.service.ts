import { inject, Injectable } from '@angular/core';
import { IUserDto } from '../dtos/user.dto';
import { BasketService } from './basket.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private basketService = inject(BasketService);
  localStorageUsers?: string | null;
  users: IUserDto[] = [];
  localStorageCurrenUser?: string | null;
  currenUser?: IUserDto;
  isUserLoggedIn: boolean = false;
  signUpErrorMassage: string = '';
  signInErrorMassage: string = '';

  constructor() {
    this.localStorageUsers = localStorage.getItem('users');
    if (this.localStorageUsers) {
      this.users = JSON.parse(this.localStorageUsers);
    }
    this.localStorageCurrenUser = localStorage.getItem('currentUser');
    if (this.localStorageCurrenUser) {
      this.currenUser = JSON.parse(this.localStorageCurrenUser);
    }
    this.chengeUserStatus();
  }
  chengeUserStatus() {
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
  signUp(
    username: string,
    password: string,
    confirmPassword: string,
    email: string,
  ) {
    const id: string = crypto.randomUUID();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let newUser: IUserDto;
    let errorMassage = '';
    let existingUser = this.users.find(
      (user) => user.username === username || user.email === email,
    );
    if (existingUser) {
      errorMassage = 'Username or email is already exist !';
      this.signUpErrorMassage = errorMassage;
      return;
    } else if (username.length < 5) {
      errorMassage = 'Your username must have 5 or more charecter !';
      this.signUpErrorMassage = errorMassage;
      return;
    } else if (!emailRegex.test(email)) {
      errorMassage = 'Your Email is not valid !';
      this.signUpErrorMassage = errorMassage;
      return;
    } else if (password !== confirmPassword) {
      errorMassage = 'Your confirm password is incorrect !';
      this.signUpErrorMassage = errorMassage;
      return;
    } else if (password.length < 8 || confirmPassword.length < 8) {
      errorMassage =
        'Your password and confirm password must have 8 or more charecter !';
      this.signUpErrorMassage = errorMassage;
      return;
    } else {
      errorMassage = '';
      this.signUpErrorMassage = errorMassage;
      newUser = {
        id,
        username,
        password,
        email,
      };
    }
    this.users.push(newUser);
    this.addUserToLocalStorage();
    this.currenUser = newUser;
    this.addCurrensUserToLocalStorage();
    this.chengeUserStatus();
    this.basketService.createBascket(id);

    return this.currenUser;
  }
  signIn(username: string, password: string) {
    let findedUser = this.users.find((user) => user.username === username);
    if (!findedUser) {
      this.signInErrorMassage = 'Username is not found !';
      return;
    } else if (findedUser.password !== password) {
      this.signInErrorMassage = 'Password is incorrect !';
      return;
    } else {
      this.signInErrorMassage = '';
      this.currenUser = findedUser;
      this.addCurrensUserToLocalStorage();
      this.chengeUserStatus();
      this.basketService.getCurrentBasket(findedUser.id);
    }
  }
}

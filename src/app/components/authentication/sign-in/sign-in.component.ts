import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ɵEmptyOutletComponent } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterLink, ɵEmptyOutletComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  authService = inject(AuthService);
  username: string = '';
  password: string = '';
  errorMassage: string = '';

  submitForm() {
    this.authService.signIn(this.username, this.password);
    this.errorMassage = this.authService.signInErrorMassage;
  }
}

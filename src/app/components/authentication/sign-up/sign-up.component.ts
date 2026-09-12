import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  authService = inject(AuthService);
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMassage: string = '';
  submitForm() {
    this.authService.signUp(
      this.username,
      this.password,
      this.confirmPassword,
      this.email,
    );

    this.errorMassage = this.authService.signUpErrorMassage;
  }
}

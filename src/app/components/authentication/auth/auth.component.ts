import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SignInComponent, SignUpComponent, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  authService = inject(AuthService);
}

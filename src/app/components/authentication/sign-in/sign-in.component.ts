import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  @Input('situation')
  situation: string | undefined = 'sign-in';

  username: string = '';
  email: string = '';
  password: string = '';
  errorMassage: string = '';
  submitForm() {}
}

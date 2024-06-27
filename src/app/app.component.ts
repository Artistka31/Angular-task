import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordComponent } from './password-strength-checker/password-strength-checker.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-app';
}

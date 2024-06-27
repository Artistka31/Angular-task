import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength-checker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.css'],
})
export class PasswordComponent {
  sections: string[] = ['gray', 'gray', 'gray'];
  passwordClass: string = '';

  onPasswordInput(event: any): void {
    const password = event.target.value;
    this.updateStrengthMeter(password);
  }

  updateStrengthMeter(password: string): void {
    if (!password) {
      this.sections = ['gray', 'gray', 'gray'];
      this.passwordClass = '';
      return;
    }

    if (password.length < 8) {
      this.sections = ['red', 'red', 'red'];
      this.passwordClass = 'short';
      return;
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[^a-zA-Z\d]/.test(password);

    if (
      (hasLetters && !hasDigits && !hasSymbols) ||
      (!hasLetters && hasDigits && !hasSymbols) ||
      (!hasLetters && !hasDigits && hasSymbols)
    ) {
      this.sections = ['red', 'gray', 'gray'];
      this.passwordClass = 'easy';
    } else if (
      (hasLetters && hasDigits && !hasSymbols) ||
      (hasLetters && !hasDigits && hasSymbols) ||
      (!hasLetters && hasDigits && hasSymbols)
    ) {
      this.sections = ['yellow', 'yellow', 'gray'];
      this.passwordClass = 'medium';
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.sections = ['green', 'green', 'green'];
      this.passwordClass = 'strong';
    }
  }
}

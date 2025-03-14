import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@shared/input.component';
import { myEmailValidator } from '@shared/utils/my-email.validator';
import { LoginData } from '../../interfaces/login.interface';

@Component({
  selector: 'app-login-form',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);

  protected login = output<LoginData>();

  protected form = this.fb.group({
    email: this.fb.control(null, [Validators.required, myEmailValidator()]),
    password: this.fb.control(null, Validators.required),
  });

  onLogin() {
    const loginData = this.form.getRawValue() as unknown as LoginData;
    this.login.emit(loginData);
  }
}

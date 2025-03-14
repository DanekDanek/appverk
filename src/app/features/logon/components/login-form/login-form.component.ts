import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@shared/input.component';
import { myEmailValidator } from 'app/shared/utils/my-email.validator';

@Component({
  selector: 'app-login-form',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);

  protected form = this.fb.group({
    email: this.fb.control('', [Validators.required, myEmailValidator()]),
    password: this.fb.control('', Validators.required),
  });

  onLogin() {
    console.log(this.form.getRawValue());
  }
}

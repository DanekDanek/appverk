import { Component, inject } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LayoutComponent } from '@shared/layout';
import { LoginData } from '../../interfaces/login.interface';
import { AuthService } from '@shared/auth.service';

@Component({
  selector: 'app-logon-page',
  imports: [LoginFormComponent, LayoutComponent],
  templateUrl: './logon-page.component.html',
})
export class LogonPageComponent {
  private authService = inject(AuthService);

  onLogin(event: LoginData) {
    console.log(event);
    this.authService.login();
  }
}

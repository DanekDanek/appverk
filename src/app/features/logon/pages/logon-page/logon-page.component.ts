import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LayoutComponent } from '@shared/layout';

@Component({
  selector: 'app-logon-page',
  imports: [LoginFormComponent, LayoutComponent],
  templateUrl: './logon-page.component.html',
})
export class LogonPageComponent {}

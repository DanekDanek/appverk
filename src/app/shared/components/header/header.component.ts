import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@shared/auth.service';

@Component({
  selector: 'app-header',
  styleUrl: './header.component.scss',
  template: `
    <header class="header_container bg-brand text-light shadow">
      <div class="header_content">
        <span> APPVERK recruitment task </span>
        @if (isAuthorized) {
          <button class="logout-btn text-light" (click)="onLogout()">Log out</button>
        }
      </div>
    </header>
  `,
})
export class HeaderComponent implements OnInit {
  private authService = inject(AuthService);

  isAuthorized = false;

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((userStatus) => (this.isAuthorized = userStatus));
  }

  onLogout() {
    this.authService.logout();
  }
}

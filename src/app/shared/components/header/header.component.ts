import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.component.scss',
  template: `
    <header class="header_container bg-brand text-light shadow">
      <div class="header_content">APPVERK recruitment task</div>
    </header>
  `,
})
export class HeaderComponent {}

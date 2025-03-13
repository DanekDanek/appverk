import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.component.scss',
  template: `
    <footer class="footer_container bg-brand text-light">
      <p class="footer_content">&copy; {{ currentYear() }} All rights reserved</p>
    </footer>
  `,
})
export class FooterComponent {
  private date = new Date();
  protected currentYear = signal(this.date.getFullYear());
}

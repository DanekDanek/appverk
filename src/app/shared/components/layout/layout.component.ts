import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: ` <div class="container"><ng-content /></div> `,
  styles: `
    .container {
      width: 100%;
      max-width: 100vw;
      margin-left: auto;
      margin-right: auto;
      padding: 2rem 1rem;
    }
  `,
})
export class LayoutComponent {}

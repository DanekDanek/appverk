import { Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
];

import { Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage';
import { LogonPageComponent } from './features/logon';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LogonPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

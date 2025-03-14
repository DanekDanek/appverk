import { Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage';
import { LogonPageComponent } from './features/logon';
import { authorizedGuard } from '@shared/authorized.guard';
import { nonAuthorizedGuard } from '@shared/non-authorized.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
    canActivate: [authorizedGuard],
  },
  {
    path: 'login',
    component: LogonPageComponent,
    canActivate: [nonAuthorizedGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

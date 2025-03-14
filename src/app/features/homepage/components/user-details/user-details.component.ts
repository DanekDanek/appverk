import { Component, input } from '@angular/core';
import { UserDetails } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  public user = input<UserDetails>();
}

import { Component, inject, OnInit } from '@angular/core';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
import { UserDetailsService } from '../../services/user-details.service';
import { combineLatest } from 'rxjs';
import { UserDetails } from '../../interfaces/user.interface';
import { AuthService, LayoutComponent } from '@shared/auth.service';

@Component({
  selector: 'app-homepage',
  imports: [UserDetailsComponent, LayoutComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  private userDetailsService = inject(UserDetailsService);
  private authService = inject(AuthService);

  protected userDetails: UserDetails | null = null;

  ngOnInit(): void {
    combineLatest([
      this.authService.loginData$,
      this.userDetailsService.getUserDetails(),
    ]).subscribe(([loginData, userDetails]) => (this.userDetails = { loginData, userDetails }));
  }
}

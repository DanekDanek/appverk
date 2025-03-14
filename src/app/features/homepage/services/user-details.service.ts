import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user.interface';
import * as mockData from '../../../../assets/mock-api.json';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private mockData = mockData;

  getUserDetails(): Observable<User> {
    return of(this.mockData);
  }
}

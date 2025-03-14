import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private storageKey = 'dummy-user-auth-token';
  private isLoggedInSubject = new BehaviorSubject(false);

  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private generateToken(): string {
    return (Math.random() + 1).toString(36).substring(7);
  }

  private setToken(): void {
    const token = this.generateToken();
    localStorage.setItem(this.storageKey, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  private clearToken(): void {
    localStorage.clear();
  }

  login() {
    this.setToken();
    this.isLoggedInSubject.next(true);
    this.router.navigate(['']);
  }

  logout() {
    this.clearToken();
    this.isLoggedInSubject.next(false);
    this.router.navigate(['login']);
  }

  checkStatus(): string {
    return this.getToken() ?? '';
  }
}

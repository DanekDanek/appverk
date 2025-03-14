import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'app/features/logon/interfaces/login.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private storageKey = 'dummy-user-auth-token';
  private isLoggedInSubject = new BehaviorSubject(false);
  private loginDataSubject = new BehaviorSubject<LoginData | null>(null);

  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  loginData$ = this.loginDataSubject.asObservable();

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

  login(data: LoginData) {
    this.setToken();
    this.isLoggedInSubject.next(true);
    this.loginDataSubject.next(data);
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

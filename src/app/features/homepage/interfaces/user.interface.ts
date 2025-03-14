import { LoginData } from 'app/features/logon';

export interface User {
  name: string;
  surname: string;
  city: string;
  'postal-code': string;
  street: string;
  country: string;
}

export interface UserDetails {
  loginData: LoginData | null;
  userDetails: User;
}

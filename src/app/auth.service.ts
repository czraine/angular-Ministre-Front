import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  // login method
  login(email: string, password: string) {}

  // register method
  register(email: string, password: string) {}

  // sign out
  logout() {}

  // forgot password
  forgotPassword(email: string) {}

  // email varification
  sendEmailForVarification(user: any) {
    console.log(user);
    user.sendEmailVerification().then(
      (res: any) => {
        this.router.navigate(['/varify-email']);
      },
      (err: any) => {
        alert('Something went wrong. Not able to send mail to your email.');
      }
    );
  }

  //sign in with google
}

import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthenticateRequest } from 'src/app/model/authenticateRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const request: AuthenticateRequest = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(request).subscribe({
      next: (res: any) => {
        console.log("response", res);
        console.log("Message ==> ", res.body.message);
        if (res.body.status == 200) {
          localStorage.setItem('logged', "true");
          console.log(res.body.token);
          this.authService.setToken(res.body.body.token);
          this.authService.retrieveUserConnected(res.body.body.token);
          console.log('test after login');
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        console.error('Authentication failed:', err);
      },
    });
  }
}

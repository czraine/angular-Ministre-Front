import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  email: string = '';

  constructor(
    private auth: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'Password reset link sent to your email',
    });
  }
}

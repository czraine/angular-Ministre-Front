import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './forget-password-routing.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ForgetPasswordComponent } from './forget-password.component';
import { AuthService } from 'src/app/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CardModule } from 'primeng/card';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,

    CardModule,
    ToastModule,
    DividerModule,
  ],
  declarations: [ForgetPasswordComponent],
  providers: [AuthService, MessageService],
})
export class ForgetPasswordModule {}

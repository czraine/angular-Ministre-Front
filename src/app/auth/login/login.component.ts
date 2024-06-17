import { Component } from '@angular/core';
import { LayoutService } from 'src/app/Services/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  valCheck: string[] = ['remember'];

  password!: string;

  constructor(public layoutService: LayoutService) {}
}

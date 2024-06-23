import { Component, OnInit } from '@angular/core';
import { Minister } from '../../model/minister';
import { MessageService } from 'primeng/api';
import { Admin } from 'src/app/model/admin';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { MinisterService } from 'src/app/Services/Minister/minister.service';
import { ToolbarModule } from 'primeng/toolbar'; // Import the ToolbarModule


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
  // Provide MessageService for Toast messages
})
export class DashboardComponent implements OnInit {
  admin: Admin = {} as Admin;
  
  constructor(private authService:AuthService ,private ministerService: MinisterService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.authService.retrieveUserConnected(this.authService.getToken()).subscribe((res: any) => {
      this.admin = res;
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../Services/SideBar.service';
import { AuthService } from '../../Services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private sidebarService: SidebarService,
    private router: Router,private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  toggleSidebar() {
    // Check if the button click event is registered
    this.sidebarService.toggleSidebar();
    // Check if the visibility state is changing
  }
}

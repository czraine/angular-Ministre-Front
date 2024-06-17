import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SidebarService } from '../Services/SideBar.service';
import { Minister, MinistreService } from '../Services/ministre.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(300, style({ opacity: 1 }))]),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  isSidebarVisible = true;
  isSubmenuOpen = false;
  isDashboardSelected = false;
  ministers: Minister[] = [];

  constructor(
    private ministerService: MinistreService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible);
      this.isSidebarVisible = isVisible;
    });
    this.loadMinisters();
  }
  loadMinisters(): void {
    this.ministerService.getAllMinistre().subscribe(
      (data) => {
        this.ministers = data;
        console.log(this.ministers);
      },
      (error) => {
        console.error('Error fetching ministers', error);
      }
    );
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.sidebarService.toggleSidebar(); // Toggle sidebar state
  }

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  selectDashboard() {
    this.isDashboardSelected = true;
  }
}

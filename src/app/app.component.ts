import { Component } from '@angular/core';
import { SidebarService } from './Services/SideBar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ministre';
  isSidebarVisible = true;
  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible);
      this.isSidebarVisible = isVisible;
    });
  }
}

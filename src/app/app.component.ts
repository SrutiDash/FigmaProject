

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropdownOpen = false;
  activeMenu: string | null = null;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navigateToProfile() {
    this.router.navigate(['/profile-details']);
    this.dropdownOpen = false;
  }

  toggleSubMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}

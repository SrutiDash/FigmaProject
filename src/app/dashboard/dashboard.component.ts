// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   dropdownOpen = false;

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }
// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   dropdownOpen = false;

//   constructor(private router: Router) {}

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   navigateToProfile() {
//     this.router.navigate(['/profile-details']);
//   }
// }



// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   dropdownOpen = false;

//   constructor(private router: Router) {}

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   navigateToProfile() {
//     this.router.navigate(['/profile-details']);
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dropdownOpen = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navigateToProfile() {
    this.router.navigate(['/profile-details']);
  }
}

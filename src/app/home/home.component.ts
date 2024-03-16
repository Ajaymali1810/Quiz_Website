import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

   // Method for navigating to a specified route and scrolling to the top of the page
  // Takes a 'route' parameter, which is the destination route
  goToTutorial(route: string) {
    // Using the router service to navigate to the specified route
    this.router.navigate([route]).then(() => {
      // After navigation is successful, scroll to the top of the page
      window.scrollTo(0, 0);
    });
  }
  
}

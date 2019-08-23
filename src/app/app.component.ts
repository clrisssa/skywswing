import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skyswing';
  isOpen: boolean = false
  toggleText: String = "More"
  imgPath: String = '../assets/images/swing.jpg'

  showHome = true

  toggleMenu() {
    // console.log("open: " + this.isOpen)
    if (this.isOpen == false) {
      this.isOpen = true
      this.toggleText = "Close"
    } else {
      this.isOpen = false
      this.toggleText = "More"
    }
  }

  constructor(private router: Router) {
    const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );

    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-106185727-3', {
        'page_path': event.urlAfterRedirects
      });
    });
  }

  menuOnClick(menuItem) {
    // console.log("menuonclick:" + menuItem)
    if (menuItem == '') {
      this.showHome = true;
      this.router.navigate(['/']);

    } else {
      this.router.navigate(['/book/' + menuItem]);
      this.showHome = false;
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skyswing';
  isOpen: boolean = false
  toggleText: String = "Book"
  imgPath: String = '../assets/images/swing.jpg'

  showHome = true

  toggleMenu() {
    console.log("open: " + this.isOpen)
    if (this.isOpen == false) {
      this.isOpen = true
      this.toggleText = "Close"
    } else {
      this.isOpen = false
      this.toggleText = "Book"
    }
  }

  constructor(private router: Router) { }

  menuOnClick(menuItem) {
    console.log("menuonclick:" + menuItem)
    if (menuItem == '') {
      this.showHome = true;
      this.router.navigate(['/']);

    } else {
      this.router.navigate(['/book/' + menuItem]);
      this.showHome = false;
    }
  }
}

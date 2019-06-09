import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgPath: String = '/skyswing/assets/images/swing5.jpg'
  initialImg: String = '/skyswing/assets/images/swing5.jpg'
  imgLookup = {}

  initialCaption: String = "Indulge your senses. Discover experiences"
  caption: String = "Indulge your senses. Discover experiences"
  captionLookup = {}

  open: Boolean = false;
  isOpen: boolean = false
  toggleText: String = "Book"

  //keep track of the button statuses (active/not)
  activeLookup = {}
  changedImg = false;

  //show intro
  showIntro = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.imgLookup['outdoor'] = '/skyswing/assets/images/outdoor.jpg'
    this.imgLookup['restaurant'] = '/skyswing/assets/images/restaurant4.jpg'
    this.imgLookup['spa'] = '/skyswing/assets/images/spa.jpg'
    this.imgLookup['photo'] = '/skyswing/assets/images/photo.jpg'

    this.captionLookup['outdoor'] = 'Discover new challenges throughout the day.'
    this.captionLookup['restaurant'] = 'Indulge in our delightful food & beverage offerings.'
    this.captionLookup['spa'] = 'Relax, indulge, enjoy. Give yourself a well-deserved break.'
    this.captionLookup['photo'] = 'Find the beautiful scenery and capture your special moments.'

    this.activeLookup['outdoor'] = false;
    this.activeLookup['restaurant'] = false;
    this.activeLookup['spa'] = false;
    this.activeLookup['photo'] = false;
  }

  toggleMenu() {
    // console.log("open: " + this.isOpen)
    if (this.isOpen == false) {
      this.isOpen = true
      this.toggleText = "Close"
    } else {
      this.isOpen = false
      this.toggleText = "Book"
    }
  }

  mouseEnter(item) {
    this.imgPath = this.imgLookup[item]
    this.caption = this.captionLookup[item]
  }

  mouseLeave(item) {
    let outdoorActive = this.activeLookup['outdoor']
    let restActive = this.activeLookup['restaurant']
    let spaActive = this.activeLookup['spa']
    let photoActive = this.activeLookup['photo']

    if (!outdoorActive &&
      !restActive &&
      !spaActive &&
      !photoActive) {
      this.imgPath = this.initialImg
      this.caption = this.initialCaption
    }

    if (outdoorActive) {
      this.imgPath = this.imgLookup['outdoor']
      this.caption = this.captionLookup['outdoor']

    }
    if (restActive) {
      this.imgPath = this.imgLookup['restaurant']
      this.caption = this.captionLookup['restaurant']

    }
    if (spaActive) {
      this.imgPath = this.imgLookup['spa']
      this.caption = this.captionLookup['spa']

    }
    if (photoActive) {
      this.imgPath = this.imgLookup['photo']
      this.caption = this.captionLookup['photo']

    }
  }

  mouseClick(item) {
    this.imgPath = this.imgLookup[item]
    this.caption = this.captionLookup[item]

    this.changedImg = false;
    var initialState = this.activeLookup[item]
    this.activeLookup['outdoor'] = false;
    this.activeLookup['restaurant'] = false;
    this.activeLookup['spa'] = false;
    this.activeLookup['photo'] = false;

    this.activeLookup[item] = !initialState

    // console.log(this.activeLookup[item])
    this.changedImg = true;
  }

  prodOnClick(prod) {

    if (this.router.url === '/info/' + prod) {
      this.router.navigate(['']);
      this.showIntro = true;

    }else{
      this.router.navigate(['/info/' + prod])
      this.showIntro = false;
    }
  }
}

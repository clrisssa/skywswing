import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgPath: String = '../assets/images/swing5.jpg'
  initialImg: String = '../assets/images/swing5.jpg'
  imgLookup = {}

  initialCaption: String = "Indulge your senses. Discover experiences"
  caption: String = "Indulge your senses. Discover experiences"
  captionLookup = {}

  open: Boolean = false;
  isOpen: boolean = false
  toggleText: String = "More"

  //keep track of the button statuses (active/not)
  activeLookup = {}
  changedImg = false;

  //show intro
  showIntro = true;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Sky Swing Bali');
    this.meta.updateTag({ name: 'description', content: 'Sky Swing is the best all-in-one place to find fun outdoor adventures or simply to indulge yourself in food and beverage and to get a spa and massage after a long day in the sun. Enjoy Bali from a different perspective by getting on our hot-air balloon and swing or explore Balinese traditional villages firsthand, you can find all you need at Sky Swing Bali. You could also relax and unwind by treating yourself in our Spa & Massage center. Make your day even more special at our restaurant by the paddy field. Satisfy your palate by enjoying our special dishes in our restaurant prepared specially by our chef.' });
    this.imgLookup['outdoor'] = '../assets/images/outdoor.jpg'
    this.imgLookup['restaurant'] = '../assets/images/restaurant4.jpg'
    this.imgLookup['spa'] = '../assets/images/pool.jpg'
    this.imgLookup['photo'] = '../assets/images/photo.jpg'

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
      this.toggleText = "More"
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

  prodOnClick(prod, el: HTMLElement) {

    if (this.router.url === '/info/' + prod) {
      this.router.navigate(['']);
      this.showIntro = true;

    }else{
      // this.router.navigate(['/info/' + prod])
      this.showIntro = false;
    }
    el.scrollIntoView({behavior: 'smooth'});
  }
}

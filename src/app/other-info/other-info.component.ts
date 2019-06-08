import { Component, OnInit } from '@angular/core';
import {OtherService} from '../other.service'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss'],
  providers: [OtherService]
})
export class OtherInfoComponent implements OnInit {
  infoCaption = ""
  menuItem = ""

  constructor(
    private otherService: OtherService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.menuItem = params['menuItem'];
      this.infoCaption = this.otherService.getOtherInfo(this.menuItem)
    })
  }

}

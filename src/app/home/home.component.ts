import { Component } from '@angular/core';
import {NgbNavModule , NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: Array<string>;

  constructor() {
    this.images = [
      'assets/img2.jpg',
      'assets/img3.jpg',
      'assets/img4.jpg'
    ];
  }
 

}

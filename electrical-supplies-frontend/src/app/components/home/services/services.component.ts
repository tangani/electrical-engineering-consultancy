import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  imgSrc1 = 'assets/services/back_image_edited.jpeg';
  imgSrc2 = 'assets/services/back_image_edited.jpeg';
  imgSrc3 = 'assets/services/back_image_edited.jpeg';
  imgSrc4 = 'assets/services/back_image_edited.jpeg';

  ngOnInit(): void {
  }

  onMouseOver(): void {
    this.imgSrc1 = 'assets/services/back_image_edited.jpeg';
  }
  onMouseOver1(): void {
    this.imgSrc1 = 'assets/services/back_image_edited.jpeg';
  }

  onMouseOut(): void {
    this.imgSrc1 = 'assets/services/back_image_edited.jpeg';
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  // private string: ;

  constructor() { }

  color = 'yellow';
  imgSrc = 'assets/services/back_image_edited.jpeg';

  ngOnInit(): void {
  }

  onMouseOver(): void {
    this.imgSrc = 'assets/services/back_image_edited.jpeg';
  }

  onMouseOut(): void {
    this.imgSrc = 'assets/services/back_image_edited.jpeg';
  }

}

import {Component, Input, OnInit} from '@angular/core';

export interface Carousel {
  slides: { image: string }[];
  itemsPerSlide?: number;
  singleSlideOffset?: boolean;
  noWrap?: boolean;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  @Input()
  carouselOptions: Carousel;

  ngOnInit() {
    const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    this.itemsPerSlide = (deviceWidth > 1024) ? 3 : (deviceWidth > 600) ? 2 : 1;
  }

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
}

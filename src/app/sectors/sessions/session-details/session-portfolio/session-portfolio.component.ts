import {Component, Input, OnInit} from '@angular/core';
import {SessionType} from '../../session-communication.service';

@Component({
  selector: 'app-session-portfolio',
  templateUrl: './session-portfolio.component.html',
  styleUrls: ['./session-portfolio.component.scss']
})
export class SessionPortfolioComponent implements OnInit {

  @Input()
  sessionType;

  page = 1;
  firstImagesToShow = [];
  slicedImages = [];

  constructor() {
  }

  ngOnInit(): void {
    if (this.sessionType === SessionType.NOWORODKOWA) {
      this.firstImagesToShow = this.pageNoworodkowa;
      this.slicedImages = this.pageNoworodkowa.slice(0, 9);
    }
  }

  leftClick() {
    if (this.page > 1) {
      this.page = this.page - 1;
      if (this.page === 1) {
        this.slicedImages = this.firstImagesToShow.slice(0, 9);
      }
      if (this.page === 2) {
        this.slicedImages = this.firstImagesToShow.slice(9, 18);
      }
    }
  }


  rightClick() {
    if (this.page < 3) {
      this.page = this.page + 1;
      if (this.page === 2) {
        this.slicedImages = this.firstImagesToShow.slice(9, 18);
      }
      if (this.page === 3) {
        this.slicedImages = this.firstImagesToShow.slice(18, 27);
      }
    }
  }

  pageNoworodkowa = [
    '../assets/noworodkowa/1.jpg',
    '../assets/noworodkowa/2.jpg',
    '../assets/noworodkowa/3.jpg',
    '../assets/noworodkowa/4.jpg',
    '../assets/noworodkowa/5.jpg',
    '../assets/noworodkowa/6.jpg',
    '../assets/noworodkowa/7.jpg',
    '../assets/noworodkowa/8.jpg',
    '../assets/noworodkowa/9.jpg',
    '../assets/noworodkowa/IMG_0346.jpg',
    '../assets/noworodkowa/IMG_0566.jpg',
    '../assets/noworodkowa/IMG_0977.jpg',
    '../assets/noworodkowa/IMG_1071.jpg',
    '../assets/noworodkowa/IMG_1154.jpg',
    '../assets/noworodkowa/IMG_1187.jpg',
    '../assets/noworodkowa/IMG_1454.jpg',
    '../assets/noworodkowa/IMG_1459.jpg',
    '../assets/noworodkowa/IMG_1503.jpg',
    '../assets/noworodkowa/IMG_1742.jpg',
    '../assets/noworodkowa/IMG_3085.jpg',
    '../assets/noworodkowa/IMG_2872.jpg',
    '../assets/noworodkowa/IMG_2964.jpg',
    '../assets/noworodkowa/IMG_2463.jpg',
    '../assets/noworodkowa/IMG_3198.jpg',
    '../assets/noworodkowa/IMG_4854.jpg',
    '../assets/noworodkowa/IMG_4980.jpg',
    '../assets/noworodkowa/IMG_5020.jpg'
  ];
}

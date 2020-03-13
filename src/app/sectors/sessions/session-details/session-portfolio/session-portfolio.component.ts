import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-session-portfolio',
  templateUrl: './session-portfolio.component.html',
  styleUrls: ['./session-portfolio.component.scss']
})
export class SessionPortfolioComponent {
  myInterval = 3000;
  activeSlideIndex = 0;

  @Input()
  sessionType;

  slides = [
    {image: './assets/noworodkowa/1.jpg'},
    {image: './assets/noworodkowa/2.jpg'},
    {image: './assets/noworodkowa/3.jpg'},
    {image: './assets/noworodkowa/4.jpg'},
    {image: './assets/noworodkowa/5.jpg'},
    {image: './assets/noworodkowa/6.jpg'},
    {image: './assets/noworodkowa/7.jpg'},
    {image: './assets/noworodkowa/8.jpg'},
    {image: './assets/noworodkowa/9.jpg'},
    {image: './assets/noworodkowa/IMG_0346.jpg'},
    {image: './assets/noworodkowa/IMG_0566.jpg'},
    {image: './assets/noworodkowa/IMG_0977.jpg'},
    {image: './assets/noworodkowa/IMG_1071.jpg'},
    {image: './assets/noworodkowa/IMG_1154.jpg'},
    {image: './assets/noworodkowa/IMG_1187.jpg'},
    {image: './assets/noworodkowa/IMG_1454.jpg'},
    {image: './assets/noworodkowa/IMG_1459.jpg'},
    {image: './assets/noworodkowa/IMG_1503.jpg'},
    {image: './assets/noworodkowa/IMG_1742.jpg'},
    {image: './assets/noworodkowa/IMG_3085.jpg'},
    {image: './assets/noworodkowa/IMG_2872.jpg'},
    {image: './assets/noworodkowa/IMG_2964.jpg'},
    {image: './assets/noworodkowa/IMG_2463.jpg'},
    {image: './assets/noworodkowa/IMG_3198.jpg'},
    {image: './assets/noworodkowa/IMG_4854.jpg'},
    {image: './assets/noworodkowa/IMG_4980.jpg'},
    {image: './assets/noworodkowa/IMG_5020.jpg'}
  ];
}

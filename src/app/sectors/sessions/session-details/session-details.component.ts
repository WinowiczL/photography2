import {Component, Input, OnInit} from '@angular/core';
import {SessionType} from '../session-communication.service';
import {Carousel} from '../../../shared/components/carousel/carousel.component';

export interface Details {
  description: string;
}

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss']
})
export class SessionDetailsComponent implements OnInit {

  @Input()
  sessionType;

  details: Details;

  carouselOptions: Carousel;


  ngOnInit() {
    this.setDetails();
  }

  private setDetails() {
    if (this.sessionType === SessionType.NOWORODKOWA) {
      this.details = {
        description: 'Pierwsze tygodnie, gdy na świat przychodzi dziecko są dla rodziny szczególnie wyjątkowe. Uwielbiam obserwować, jak podczas sesji wpatrujecie się w nowego członka Waszej rodziny. Przyglądacie się tym małym stópkom, rączkom i buzi z ogromną miłością i czułością. Warto zatrzymać w pamięci te wyjątkowe chwile, bo z tygodnia na tydzień maleństwo będzie rosnąć i stale się zmieniać. Sesja noworodkowa to niepowtarzalna pamiątka dla każdego członka rodziny, dlatego nie pozwólcie sobie go przegapić.'
      };
      this.carouselOptions = {
        slides: [
          {image: '../assets/noworodkowa/1.jpg'},
          {image: '../assets/noworodkowa/2.jpg'},
          {image: '../assets/noworodkowa/3.jpg'},
          {image: '../assets/noworodkowa/4.jpg'},
          {image: '../assets/noworodkowa/5.jpg'},
          {image: '../assets/noworodkowa/6.jpg'},
          {image: '../assets/noworodkowa/7.jpg'},
          {image: '../assets/noworodkowa/8.jpg'},
          {image: '../assets/noworodkowa/9.jpg'},
        ],
        itemsPerSlide: 4
      };
    }
  }

}

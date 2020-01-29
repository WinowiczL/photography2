import {Component, Input} from '@angular/core';
import {Details} from '../session-details.component';
import {Carousel} from '../../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-session-description',
  templateUrl: './session-description.component.html',
  styleUrls: ['./session-description.component.scss']
})
export class SessionDescriptionComponent {

  @Input()
  sessionType;

  @Input()
  details: Details;

  @Input()
  carouselOptions: Carousel;
}

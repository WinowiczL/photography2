import {Component, Input} from '@angular/core';
import {Details} from '../session-details.component';

@Component({
  selector: 'app-session-portfolio',
  templateUrl: './session-portfolio.component.html',
  styleUrls: ['./session-portfolio.component.scss']
})
export class SessionPortfolioComponent {
  myInterval = 3000;
  activeSlideIndex = 0;

  @Input()
  details: Details;
}

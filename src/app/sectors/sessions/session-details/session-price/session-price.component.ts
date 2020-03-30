import {Component, Input} from '@angular/core';
import {Price} from '../session-details.component';
import {SessionType} from '../../session-communication.service';

@Component({
  selector: 'app-session-price',
  templateUrl: './session-price.component.html',
  styleUrls: ['./session-price.component.scss']
})
export class SessionPriceComponent {

  @Input()
  price: Price;

  @Input()
  sessionType: SessionType;

}

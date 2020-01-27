import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input()
  imageSource;

  @Input()
  imageAlt;

  @Input()
  cardTitle;

  @Output()
  chosenSessionType = new EventEmitter<string>();
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {

  @Input()
  title;

  @Input()
  imageSrc;

  @Input()
  prepareText;

  @Input()
  offerText;

  @Output()
  backToEmitter = new EventEmitter();

  contentToShow = 'offer';

  onPrepareContentClick() {
    this.contentToShow = 'prepare';
  }

  onOfferContentClick() {
    this.contentToShow = 'offer';
  }

}

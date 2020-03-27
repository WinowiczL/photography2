import {Component, Input, OnInit} from '@angular/core';
import {SessionType} from '../session-communication.service';
import {noworodkowa} from './session-text/session-text-noworodkowa';
import {dziecieca} from './session-text/session-text-dziecieca';
import {slubna} from './session-text/session-text-slubna';
import {ciazowa} from './session-text/session-text-ciazowa';
import {rodzinna} from './session-text/session-text-rodzinna';
import {portretowa} from './session-text/session-text-portretowa';

export interface Details {
  type: SessionType;
  descriptionImage: string;
  description: string;
  prepare: string[];
  carouselOptions: CarouselOptions;
  price: Price;
}

export interface CarouselOptions {
  slides: {
    image: string;
  }[];
  itemsPerSlide: number;
}

export interface Price {
  mini: {
    price: number;
    inPrice: string[];
  };
  standard: {
    price: number;
    inPrice: string[];
  };
  max: {
    price: number;
    inPrice: string[];
  };
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

  ngOnInit() {
    this.setDetails();
  }

  private setDetails() {
    if (this.sessionType === SessionType.NOWORODKOWA) {
      this.details = noworodkowa;
    }
    if (this.sessionType === SessionType.DZIECIECA) {
      this.details = dziecieca;
    }
    if (this.sessionType === SessionType.SLUBNA) {
      this.details = slubna;
    }
    if (this.sessionType === SessionType.CIAZOWA) {
      this.details = ciazowa;
    }
    if (this.sessionType === SessionType.RODZINNA) {
      this.details = rodzinna;
    }
    if (this.sessionType === SessionType.PORTRETOWA) {
      this.details = portretowa;
    }
  }

}

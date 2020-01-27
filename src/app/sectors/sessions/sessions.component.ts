import {Component} from '@angular/core';
import { sessionTypeImagePath } from '../../shared/images';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent {

  chosenSessionType = null;
  sessions = [
    {
      imageSrc: sessionTypeImagePath.sesjaNoworodkowa.imagePath,
      imageAlt: sessionTypeImagePath.sesjaNoworodkowa.imageAlt,
      cardTitle: 'Sesja noworodkowa',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
        offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
      }
    },
    {
      imageSrc: sessionTypeImagePath.sesjaDziecieca.imagePath,
      imageAlt: sessionTypeImagePath.sesjaDziecieca.imageAlt,
      cardTitle: 'Sesja dziecięca',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
        offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
      },
    },
    {
      imageSrc: sessionTypeImagePath.sesjaCiazowa.imagePath,
      imageAlt: sessionTypeImagePath.sesjaCiazowa.imageAlt,
      cardTitle: 'Sesja ciążowa',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
        offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
      },
    },
    {
      imageSrc: sessionTypeImagePath.sesjaRodzinna.imagePath,
      imageAlt: sessionTypeImagePath.sesjaRodzinna.imageAlt,
      cardTitle: 'Sesja rodzinna',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
        offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
      },
    },
    {
      imageSrc: sessionTypeImagePath.sesjaPortretowa.imagePath,
      imageAlt: sessionTypeImagePath.sesjaPortretowa.imageAlt,
      cardTitle: 'Sesja portretowa',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
        offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
      },
    },
    {
      imageSrc: sessionTypeImagePath.sesjaSlubna.imagePath,
      imageAlt: sessionTypeImagePath.sesjaSlubna.imageAlt,
      cardTitle: 'Reportaż ślubny',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
        offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
      },
    }
  ];

  setChosenSessionType(cardTitle) {
    this.chosenSessionType = this.sessions.find(session => session.cardTitle === cardTitle);
  }

  setEmptyChosenSession() {
    this.chosenSessionType = null;
  }
}

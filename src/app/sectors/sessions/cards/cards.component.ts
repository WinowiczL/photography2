import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {sessionTypeImagePath} from '../../../shared/images';
import {SessionCommunicationService} from '../session-communication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Output()
  sessionClick = new EventEmitter();

  details = 'opis';

  constructor(private route: ActivatedRoute, private service: SessionCommunicationService, private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.szczegoly) {
        this.details = params.szczegoly;
      }
    });
  }


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

  onSessionSelect(sessionType) {
    this.sessionClick.emit({sessionType, dialogOption: 'OPIS'});
  }

}

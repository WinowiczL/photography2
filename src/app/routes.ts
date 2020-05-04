import {Routes} from '@angular/router';
import {CardsComponent} from './sectors/sessions/cards/cards.component';
import {SessionDetailsComponent} from './sectors/sessions/session-details/session-details.component';

export const appRoutes: Routes = [
  { path: '/stronaglowna', redirectTo: ''},
  {
    path: '', component: CardsComponent, data: {sessionType: 'none'}
  },
  {
    path: 'sesja/noworodkowa', component: SessionDetailsComponent, data: {sessionType: 'noworodkowa'}
  },
  {
    path: 'sesja/dziecięca', component: SessionDetailsComponent, data: {sessionType: 'dziecięca'}
  },
  {
    path: 'sesja/ciążowa', component: SessionDetailsComponent, data: {sessionType: 'ciążowa'}
  },
  {
    path: 'sesja/rodzinna', component: SessionDetailsComponent, data: {sessionType: 'rodzinna'}
  },
  {
    path: 'sesja/portretowa', component: SessionDetailsComponent, data: {sessionType: 'portretowa'}
  },
  {
    path: 'reportaż/ślubny', component: SessionDetailsComponent, data: {sessionType: 'ślubna'}
  }

];

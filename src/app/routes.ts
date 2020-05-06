import {Routes} from '@angular/router';
import {CardsComponent} from './sectors/sessions/cards/cards.component';
import {SessionDetailsComponent} from './sectors/sessions/session-details/session-details.component';

export const appRoutes: Routes = [
  {
    path: '', component: CardsComponent, data: {sessionType: 'none'}
  },
  { path: 'stronaglowna', redirectTo: ''},
  {
    path: 'sesja/noworodkowa', component: SessionDetailsComponent, data: {sessionType: 'noworodkowa'}
  },
  {
    path: 'sesja/dziecieca', component: SessionDetailsComponent, data: {sessionType: 'dziecieca'}
  },
  {
    path: 'sesja/ciazowa', component: SessionDetailsComponent, data: {sessionType: 'ciazowa'}
  },
  {
    path: 'sesja/rodzinna', component: SessionDetailsComponent, data: {sessionType: 'rodzinna'}
  },
  {
    path: 'sesja/portretowa', component: SessionDetailsComponent, data: {sessionType: 'portretowa'}
  },
  {
    path: 'reportaz/slubny', component: SessionDetailsComponent, data: {sessionType: 'slubna'}
  }

];

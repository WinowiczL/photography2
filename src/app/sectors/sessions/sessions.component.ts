import {Component, OnInit} from '@angular/core';
import {SelectedDialog, SessionCommunicationService} from './session-communication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  selectedDialog: SelectedDialog = {dialogOption: 'OPIS'};
  title: string;

  constructor(private service: SessionCommunicationService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.sekcja) {
        this.title = this.setTitle(null);
        this.selectedDialog.sessionType = null;
      }
    });
    this.service.getSelectedDialog().subscribe(dialog => {
      this.title = this.setTitle(dialog.sessionType);
      this.selectedDialog = dialog;
      if (dialog.dialogOption !== 'OPIS') {
        document.getElementById('sesje').scrollIntoView({behavior: 'smooth'});
      }
    });
  }

  resetSessionType() {
    this.selectedDialog.sessionType = null;
    this.title = this.setTitle(null);
    this.router.navigate(['/']);
  }

  setTitle(sessionType): string {
    if (sessionType === 'ciazowa') {
      return 'Sesja ciążowa';
    }
    if (sessionType === 'noworodkowa') {
      return 'Sesja noworodkowa';
    }
    if (sessionType === 'dziecieca') {
      return 'Sesja dziecięca';
    }
    if (sessionType === 'rodzinna') {
      return 'Sesja rodzinna';
    }
    if (sessionType === 'portretowa') {
      return 'Sesja portretowa';
    }
    if (sessionType === 'slubna') {
      return 'Reportaż ślubny';
    }
    return 'Wybierz interesującą cię sesję';
  }

}

import {Component, OnInit} from '@angular/core';
import {SelectedDialog, SessionCommunicationService} from './session-communication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  selectedDialog: SelectedDialog = {dialogOption: 'OPIS'};

  constructor(private service: SessionCommunicationService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getSelectedDialog().subscribe(dialog => {
      this.selectedDialog = dialog;
      if (dialog.dialogOption !== 'OPIS') {
        document.getElementById('sesje').scrollIntoView({behavior: 'smooth'});
      }
    });
  }

  resetSessionType() {
    this.selectedDialog.sessionType = null;
    this.router.navigate(['/']);
  }
}

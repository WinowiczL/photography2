import {Component, OnInit} from '@angular/core';
import {SelectedDialog, SessionCommunicationService} from './session-communication.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  selectedDialog: SelectedDialog;

  constructor(private service: SessionCommunicationService) {
  }

  ngOnInit(): void {
    this.selectedDialog = this.service.getSelectedDialog();
  }

  setSession(selectedDialog) {
    document.getElementById('sesje').scrollIntoView({ behavior: 'smooth'});
    this.selectedDialog = selectedDialog;
  }

  resetSessionType() {
    this.selectedDialog.sessionType = null;
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-session-prepare',
  templateUrl: './session-prepare.component.html',
  styleUrls: ['./session-prepare.component.scss']
})
export class SessionPrepareComponent {

  @Input()
  details;

  @Input()
  reportaz;

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-session-description',
  templateUrl: './session-description.component.html',
  styleUrls: ['./session-description.component.scss']
})
export class SessionDescriptionComponent implements OnInit {

  @Input()
  sessionType;

  constructor() { }

  ngOnInit() {
  }

}

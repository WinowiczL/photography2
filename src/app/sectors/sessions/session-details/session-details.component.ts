import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss']
})
export class SessionDetailsComponent implements OnInit {

  @Input()
  sessionType;

  constructor() { }

  ngOnInit() {
  }

}

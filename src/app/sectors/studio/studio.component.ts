import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {

  mobile: boolean;

  ngOnInit() {
    if (window.screen.width < 768) {
      this.mobile = true;
    }
  }
}

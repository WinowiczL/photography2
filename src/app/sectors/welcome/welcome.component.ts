import {Component, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  isNavChecked: boolean;

  element: HTMLElement;
  constructor(@Inject(DOCUMENT) document) {
  }

  changeNavChecked() {
    this.isNavChecked = !this.isNavChecked;
  }

  goToView(view: string) {
    this.isNavChecked = false;
    this.element = document.getElementById(`${view}`) as HTMLElement;
    this.element.scrollIntoView({ behavior: 'smooth' });
  }

}

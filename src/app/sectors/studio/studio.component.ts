import {Component} from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent {
  myInterval = 3000;
  activeSlideIndex = 0;

  slides = [
    {image: './assets/studio/IMG_8829.jpg'},
    {image: './assets/studio/IMG_8836.jpg'},
    {image: './assets/studio/IMG_8837.jpg'},
    {image: './assets/studio/IMG_8839.jpg'},
    {image: './assets/studio/IMG_8841.jpg'},
    {image: './assets/studio/IMG_8847.jpg'},
    {image: './assets/studio/IMG_8850.jpg'},
    {image: './assets/studio/IMG_8854.jpg'},
    {image: './assets/studio/IMG_9669.jpg'},
    {image: './assets/studio/IMG_9678.jpg'},
    {image: './assets/studio/IMG_9683.jpg'},
    {image: './assets/studio/IMG_9692.jpg'},
    {image: './assets/studio/IMG_9694.jpg'},
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  slides: string [] = ['./assets/img/fridge.gif', './assets/img/motorgurus.gif', './assets/img/taskm.gif', './assets/img/picture-in-picture.gif' ]
  i=0;
  length=4;

  getSlide() {
      return this.slides[this.i];
  }

  getPrev() {
      this.i = this.i===0 ? 0 : this.i - 1;
  }
  getNext() {
      this.i = this.i===this.slides.length ? this.i : this.i + 1;
  }
}

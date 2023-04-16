import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  slides: string [] = [ './assets/img/wtf.png', './assets/img/fridge.gif', './assets/img/mg.png', './assets/img/motorgurus.gif', './assets/img/task.png', './assets/img/taskm.gif' ]
  i=0;

  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    if (this.i > this.slides.length + 2) {
      this.i -= 2;
    } else if (this.i > this.slides.length + 1) {
    } else {
      this.i = 0;
    }

  }

  getNext() {
    if (this.i < this.slides.length - 2) {
      this.i += 2;
    } else if (this.i < this.slides.length - 1) {
    } else {
      this.i = 0;
    }

  }
}

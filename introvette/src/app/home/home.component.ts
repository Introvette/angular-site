import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides: string [] = ['./assets/img/me.png', './assets/img/pollo.png' ]
  i=0;

  getSlide() {
      return this.slides[this.i];
  }

  getPrev() {
      this.i = this.i===0 ? 0 : this.i - 1;
  }
//edit here
  getNext() {
      this.i = this.i===this.slides.length ? this.i : this.i + 1;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  slides = [
    {
      imageUrl: 'assets/img/fridge.gif',
      title: 'What the Fridge?',
      description: 'This is slide 1'
    },
    {
      imageUrl: 'assets/img/motorgurus.gif',
      title: 'MotorGurus',
      description: 'This is slide 2'
    }
  ];

  currentIndex = 0;

  nextSlide() {
    console.log('Next slide clicked');
    console.log('Current index before update:', this.currentIndex);
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    console.log('Current index after update:', this.currentIndex);
  }


  prevSlide() {
    console.log('Prev slide clicked');
    console.log('Current index before update:', this.currentIndex);
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    console.log('Current index after update:', this.currentIndex);
  }

}

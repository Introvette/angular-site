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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      imageUrl: 'assets/img/motorgurus.gif',
      title: 'MotorGurus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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

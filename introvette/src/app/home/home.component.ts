import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    {
      imageUrl: 'assets/img/pic5.JPG',
      title: 'Slide 1',
      description: 'This is the description for Slide 1.'
    },
    {
      imageUrl: 'assets/img/pic4.JPG',
      title: 'Slide 2',
      description: 'This is the description for Slide 2.'
    },
    {
      imageUrl: 'assets/img/pic3.JPEG',
      title: 'Slide 3',
      description: 'This is the description for Slide 3.'
    },
    {
      imageUrl: 'assets/img/pic2.JPG',
      title: 'Slide 4',
      description: 'This is the description for Slide 4.'
    },
    {
      imageUrl: 'assets/img/pic1.JPG',
      title: 'Slide 5',
      description: 'This is the description for Slide 5.'
    }
  ];

  currentIndex = 0;

  ngOnInit() {

  }

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

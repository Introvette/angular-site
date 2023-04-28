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
      description: 'What the Fridge app allows users to input their fridge and pantry inventory, then outputs a list of recipes that match the checked ingredients the user desires to use.',
      tech_used: 'Python, FastAPI, Postgres, Docker, React, JavaScript, Redux Toolkit, HTML, CSS',
      repository: 'https://gitlab.com/demogorgons11/whats-in-the-fridge'
    },
    {
      imageUrl: 'assets/img/motorgurus.gif',
      title: 'MotorGurus',
      description: 'MotorGurus is a platform that monitors automobile sales and manufacturer inventory by tracking various models, as well as schedules service appointments with technicians.',
      tech_used: 'Python, Django, Postgres, Docker, React, JavaScript, JSX, CSS',
      repository: 'https://gitlab.com/introvette/motor-gurus/-/tree/styling'
    },
    {
      imageUrl: 'assets/img/taskm.gif',
      title: 'TaskManagr',
      description: 'TaskManagr is an aesthetically pleasing project planner. TaskManager allows users to organize their tasks and assign specific tasks to other team members all in one.',
      tech_used: 'Python, Django, HTML, CSS',
      repository: 'https://github.com/Introvette/Task-Managr/'
    },
    {
      imageUrl: 'assets/img/pic-in-pig.gif',
      title: 'Picture in Picture',
      description: 'Picture-in-picture enables users to maintain a constant visual of a browser window while navigating to other tabs or windows.',
      tech_used: 'JavaScript, HTML, CSS',
      repository: 'https://github.com/Introvette/Picture-in-Picture'
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

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('typewriterAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  textArray: string[] = [
    "Hi I'm Yvette!",
    "I'm a full stack software developer",
    "I'm a frontend developer",
    "I'm a social media manager",
    "I'm a web developer",
    "I'm a content creator",
    "I'm a Python developer"

  ];
  currentTextIndex = 0;
  displayText = '';

  ngOnInit() {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const typingInterval = 100;
    const currentText = this.textArray[this.currentTextIndex];
    let charIndex = 0;

    const typingIntervalId = setInterval(() => {
      this.displayText += currentText.charAt(charIndex);
      charIndex++;

      if (charIndex === currentText.length) {
        clearInterval(typingIntervalId);

        setTimeout(() => {
          this.clearText();
        }, 1500);
      }
    }, typingInterval);
  }

  clearText() {
    const deletingInterval = 50;
    const currentText = this.textArray[this.currentTextIndex];
    let charIndex = currentText.length - 1;

    const deletingIntervalId = setInterval(() => {
      this.displayText = this.displayText.slice(0, -1);
      charIndex--;

      if (charIndex === -1) {
        clearInterval(deletingIntervalId);

        this.currentTextIndex++;
        if (this.currentTextIndex === this.textArray.length) {
          this.currentTextIndex = 0;
        }

        setTimeout(() => {
          this.typeWriterEffect();
        }, 500);
      }
    }, deletingInterval);
  }
}

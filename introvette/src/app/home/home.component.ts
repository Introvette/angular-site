import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

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
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  textArray: string[] = [
    'web developer',
    'frontend developer',
    'backend developer',
    'Python developer',
    'graphics designer',
    'web designer',
    'content creator',
  ];
  currentTextIndex = 0;
  displayText = "I'm a ";

  ngOnInit() {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const typingInterval = 100;
    const currentText = this.textArray[this.currentTextIndex];
    let charIndex = 0;

    const typingIntervalId = setInterval(() => {
      if (charIndex === currentText.length) {
        clearInterval(typingIntervalId);
        setTimeout(() => {
          this.clearText();
        }, 1500);
      } else {
        this.displayText += currentText.charAt(charIndex);
        charIndex++;
      }
    }, typingInterval);
  }

  clearText() {
    const deletingInterval = 50;
    const currentText = this.textArray[this.currentTextIndex];
    let charIndex = currentText.length - 1;

    const deletingIntervalId = setInterval(() => {
      if (charIndex === -1) {
        clearInterval(deletingIntervalId);
        this.currentTextIndex++;
        if (this.currentTextIndex === this.textArray.length) {
          this.currentTextIndex = 0;
        }
        setTimeout(() => {
          this.typeWriterEffect();
        }, 500);
      } else {
        if (
          currentText.charAt(charIndex) === ' ' &&
          currentText.slice(0, charIndex) === "I'm a"
        ) {
          clearInterval(deletingIntervalId);
          setTimeout(() => {
            this.typeWriterEffect();
          }, 500);
        } else {
          this.displayText = this.displayText.slice(0, -1);
          charIndex--;
        }
      }
    }, deletingInterval);
  }
}

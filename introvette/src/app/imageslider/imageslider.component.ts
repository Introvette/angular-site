import { Component } from '@angular/core';

interface Image {
  url: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImageSliderComponent {
  images: Image[] = [
    {
      url: 'assets/img/pic6.JPG',
      caption: "I'm typically entertaining and eating snacks with my little guy. His name's Apollo!"
    },
    {
      url: 'assets/img/pic1.JPG',
      caption: "My fiance and I love hitting the trails, here's us on top of the Gros Piton in St. Lucia!"

    },
    {
      url: 'assets/img/pic2.JPG',
      caption: "Catch us at festivals or some outdoor activity where there's food!"
    },
    {
      url: 'assets/img/nails.JPG',
      caption: "I'm an amateur nail artist so you'll never catch me with bare nails!"
    }
  ];

  expandedImage: Image | null = null;

  expandImage(image: Image): void {
    this.expandedImage = image;
  }

  closeExpandedImage(): void {
    this.expandedImage = null;
  }
}

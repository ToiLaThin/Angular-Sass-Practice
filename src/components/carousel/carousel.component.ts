import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showSlide(n: number) {
    const slides = document.querySelectorAll(".carousel__item");
    console.log(slides);
    
    slides.forEach((slide) => { 
      (slide as HTMLElement).style.width = "0";
    });
    const displaySlide = slides[n] as HTMLElement;
    displaySlide.style.width = "100%";
  }

}

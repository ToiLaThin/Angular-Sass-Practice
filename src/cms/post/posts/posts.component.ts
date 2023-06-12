import { NgStyle } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ShowDropDownService } from './../../../shared/services/show-drop-down.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent{
  
  @ViewChild('colRight', {read: ElementRef, static: true}) colRight!: ElementRef;
  constructor(private renderer: Renderer2,private ShowDropDownService: ShowDropDownService) {}

  ngAfterViewInit(): void {
    // console.log("From posts component: ", this.colRight.nativeElement);
    
    
  }

  onResize(): any {
    // console.log("From posts component: ", this.colRight.nativeElement);
    if (window.innerWidth < 1000) {
      this.renderer.addClass(this.colRight.nativeElement, 'layer');
    } else {
      this.renderer.removeClass(this.colRight.nativeElement, 'layer')
    }
  }

  toggleHNavBarDropDown() {
    this.ShowDropDownService.toggleHNavBarDropDown();
  }
}
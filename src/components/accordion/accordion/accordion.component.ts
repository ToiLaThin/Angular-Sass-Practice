import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  openPanel(ev: Event) {
    const ele = (ev.target as HTMLElement).nextSibling as HTMLElement;
    console.log(ele);    
    if (ele.classList.contains('opened')) {
      this.renderer.removeClass(ele, 'opened');
    } else {
      this.renderer.addClass(ele, 'opened');    
    }
  }
}

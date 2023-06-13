import { AfterContentChecked, AfterContentInit, Component, ContentChildren, ElementRef, OnInit, QueryList, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren('tabItems', {read: ElementRef}) tabItems!: QueryList<ElementRef>;
  constructor(private renderer: Renderer2) { }
  ngAfterContentInit(): void {
    this.addClassForContentProjected();
  }
  
  addClassForContentProjected(): void {
    const tabItemsDOM:ElementRef[] = this.tabItems.toArray();
    tabItemsDOM.forEach((tabItem, index) => {
      const li: HTMLElement = tabItem.nativeElement;
      const a: HTMLElement = li.querySelector('a') as HTMLElement;
      //dynamic renderer thì ko thể sử dụng mixin
      this.renderer.setStyle(li, 'padding', 'var(--p-3)');
      //this.renderer.setStyle(li, 'margin', 'var(--m-2) 0');
      this.renderer.setStyle(li, 'border', '5px solid var(--bg-primary-clr)');
      this.renderer.setStyle(li, 'cursor', 'pointer');
      this.renderer.setStyle(a, 'color', 'whitesmoke');
      this.renderer.setStyle(a, 'font-size', 'var(--fs-lg)');
      this.renderer.setStyle(a, 'font-family', 'var(--ff-primary)');
    });

  }

}

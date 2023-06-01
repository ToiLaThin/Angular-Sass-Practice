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
      this.renderer.setStyle(li, 'padding', '2rem');
      this.renderer.setStyle(li, 'margin', '1rem 0');
      this.renderer.setStyle(li, 'border', '2px solid var(--bg-primary)');
      this.renderer.setStyle(li, 'cursor', 'pointer');
      this.renderer.setStyle(a, 'color', 'whitesmoke');
    });

  }

}

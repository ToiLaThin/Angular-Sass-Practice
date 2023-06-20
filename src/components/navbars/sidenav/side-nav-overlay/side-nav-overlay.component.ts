import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-nav-overlay',
  templateUrl: './side-nav-overlay.component.html',
  styleUrls: ['./side-nav-overlay.component.scss']
})
export class SideNavOverlayComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  closeSideNav() {
    const sideNav = document.querySelector('.sidenav-overlay');
    this.renderer.removeClass(sideNav, 'showed');    
  }

  openSideNav() {
    const sideNav = document.querySelector('.sidenav-overlay');
    this.renderer.addClass(sideNav, 'showed');    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-navbar',
  templateUrl: './h-navbar.component.html',
  styleUrls: ['./h-navbar.component.scss']
})
export class HNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    let ele = document.querySelector(".hnavbar-tabs") as HTMLUListElement;
    ele.classList.toggle("showNavs");
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-navbar-options',
  templateUrl: './h-navbar-options.component.html',
  styleUrls: ['./h-navbar-options.component.scss']
})
export class HNavbarOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  lightTheme : boolean = true;

  toggleTheme() {
    this.lightTheme = !this.lightTheme;
  }
}

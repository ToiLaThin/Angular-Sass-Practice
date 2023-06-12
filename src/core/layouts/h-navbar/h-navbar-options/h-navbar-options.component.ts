import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowDropDownService } from 'src/shared/services/show-drop-down.service';

@Component({
  selector: 'app-h-navbar-options',
  templateUrl: './h-navbar-options.component.html',
  styleUrls: ['./h-navbar-options.component.scss']
})
export class HNavbarOptionsComponent implements OnInit {

  showDropDown$!: Observable<boolean>;
  constructor(private showDropDownService: ShowDropDownService) { 
     this.showDropDown$ = this.showDropDownService.showHNavBarDropDown$;

  }
  ngOnInit(): void {
  }
  
  lightTheme : boolean = true;

  toggleTheme() {
    this.lightTheme = !this.lightTheme;
  }

  toggleDropDown() {
    this.showDropDownService.toggleHNavBarDropDown();    
  }
}

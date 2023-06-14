import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowDropDownService } from 'src/shared/services/show-drop-down.service';
import { ThemeToggleService } from 'src/shared/services/theme-toggle.service';

@Component({
  selector: 'app-h-navbar-options',
  templateUrl: './h-navbar-options.component.html',
  styleUrls: ['./h-navbar-options.component.scss']
})
export class HNavbarOptionsComponent implements OnInit {

  showDropDown$!: Observable<boolean>;
  constructor(private showDropDownService: ShowDropDownService, private toggleThemeService: ThemeToggleService) { 
     this.showDropDown$ = this.showDropDownService.showHNavBarDropDown$;
  }
  ngOnInit(): void {
  }
  
  lightTheme : boolean = true;

  toggleTheme() {
    this.toggleThemeService.toggleTheme();
  }

  toggleDropDown() {
    this.showDropDownService.toggleHNavBarDropDown();    
  }
}
